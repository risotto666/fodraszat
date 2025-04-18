"use client";
import { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
  isWeekend,
  isBefore,
  startOfDay,
  getDay,
  setHours,
  setMinutes,
  format,
} from "date-fns";
import { supabase } from "../lib/supabase";
import { Button } from "flowbite-react";
import Link from "next/link";
const services = [
  "Női hajvágás",
  "Férfi hajvágás",
  "Gyerek hajvágás",
  "Hajfestés",
  "Melír",
  "Frizurakészítés alkalmakra",
];
export default function IdopontFoglalas() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [selectService, setSelectService] = useState("");
  const [comment, setComment] = useState("");
  const [availableTimes, setAvailableTimes] = useState([]);
  const [loading, setLoading] = useState(false); // új állapot

  const generateTimeOptions = () => {
    const times = [];
    for (let hour = 8; hour <= 16; hour++) {
      const time = setHours(setMinutes(new Date(), 0), hour);
      times.push(format(time, "HH:mm"));
    }
    return times;
  };

  const isDisabled = (date) => {
    const today = startOfDay(new Date());
    const day = getDay(date);
    return isBefore(date, today) || day === 0 || day === 6;
  };

  // Lekérdezi a lefoglalt időpontokat a kiválasztott napra
  useEffect(() => {
    const fetchFoglalasok = async () => {
      if (!selectedDate) return;
      const formattedDate = format(selectedDate, "yyyy-MM-dd");

      const { data, error } = await supabase
        .from("foglalt_idopontok")
        .select("ido")
        .eq("datum", formattedDate);

      if (error) {
        console.error("Hiba a lekérdezésnél:", error.message);
        return;
      }

      const foglaltIdopontok = data.map((item) => item.ido);
      const allTimes = generateTimeOptions();
      const szabadIdopontok = allTimes.filter(
        (time) => !foglaltIdopontok.includes(time)
      );
      setAvailableTimes(szabadIdopontok);
      setSelectedTime("");
    };

    fetchFoglalasok();
  }, [selectedDate]);

  /*  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedDate || !selectedTime) return;

    const datum = format(selectedDate, "yyyy-MM-dd");
    const { error } = await supabase.from("foglalt_idopontok").insert([
      {
        datum,
        ido: selectedTime,
        nev: name,
        szolgaltatas: selectService,
      },
    ]);

    if (error) {
      alert("Hiba történt a mentés során: " + error.message);
    } else {
      alert(`Foglalás sikeres: ${datum} ${selectedTime}`);
      setSelectedTime("");
      setSelectedDate(null);
    }
  }; */
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedDate || !selectedTime) return;
    setLoading(true);

    const datum = format(selectedDate, "yyyy-MM-dd");

    // Az adatok, amiket küldeni fogunk az API-nak
    const formData = {
      name,
      email,
      selectedDate: datum,
      selectedTime,
      selectService,
      comment,
    };

    // Foglalás mentése a Supabase-be
    const { error } = await supabase.from("foglalt_idopontok").insert([
      {
        datum,
        ido: selectedTime,
        nev: name,
        szolgaltatas: selectService,
        megjegyzes: comment,
      },
    ]);

    if (error) {
      alert("Hiba történt a mentés során: " + error.message);
    } else {
      // Küldés a backendre (API route)
      const res = await fetch("/api/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        alert(`Foglalás sikeres: ${datum} ${selectedTime}`);
        setSelectedTime("");
        setSelectedDate(null);
      } else {
        alert(data.message || "Hiba történt az e-mail küldése során");
      }
      setComment("");
      setLoading(false);
    }
  };

  return (
    <div className="p-4 max-w-sm mx-auto bg-white rounded-lg shadow">
      <h2 className="text-xl font-bold mb-4">Időpontfoglalás</h2>
      <form onSubmit={handleSubmit}>
        <label className="block mb-2 font-medium">Dátum:</label>
        <DatePicker
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          filterDate={(date) => !isDisabled(date)}
          placeholderText="Válassz egy napot"
          dateFormat="yyyy.MM.dd"
          className="w-full p-2 border rounded mb-4"
        />

        {selectedDate && (
          <>
            <label className="block mb-2 font-medium">Időpont:</label>
            <select
              value={selectedTime}
              onChange={(e) => setSelectedTime(e.target.value)}
              className="w-full p-2 border rounded mb-4"
              required
            >
              <option value="">-- Válassz időpontot --</option>
              {availableTimes.length > 0 ? (
                availableTimes.map((time) => (
                  <option key={time} value={time}>
                    {time}
                  </option>
                ))
              ) : (
                <option disabled>Nincs szabad időpont</option>
              )}
            </select>
            <select
              value={selectService}
              onChange={(e) => setSelectService(e.target.value)}
              required
              className="w-full p-2 border rounded mb-4"
            >
              <option>-- Válassz szolgáltatást --</option>
              {services.map((service) => (
                <option value={service} key={service}>
                  {service}
                </option>
              ))}
            </select>
            <input
              required
              type="text"
              onChange={(e) => setName(e.target.value)}
              placeholder="Teljes nev"
              className="my-4 w-full p-2 rounded-3xl bg-slate-100"
            />
            <input
              required
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="E-mail"
              className="my-4 w-full p-2 rounded-3xl bg-slate-100"
            />
            <textarea
              placeholder="Megjegyzés..."
              className="w-full bg-slate-100 "
              rows={3}
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              maxLength={100}
            />
          </>
        )}

        <button
          type="submit"
          className="w-full bg-blue-600 disabled:opacity-50 text-white py-2 px-4 rounded hover:bg-blue-700"
          disabled={
            !selectedDate || !selectedTime || loading || !name || !email
          }
        >
          {loading ? "Feldolgozás..." : "Foglalás"}
        </button>
      </form>
      <Link href="/">
        <Button outline className="mx-auto mt-4">
          Vissza a főoldalra
        </Button>
      </Link>
    </div>
  );
}
