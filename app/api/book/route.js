import nodemailer from "nodemailer";
import { format } from "date-fns";

export async function POST(req) {
  const { name, email, selectedDate, selectedTime, selectService } =
    await req.json();

  // Dátum és idő formázása
  const formattedDate = format(new Date(selectedDate), "yyyy. MMMM dd."); // 2025. április 11.
  const formattedTime = format(
    new Date(`${selectedDate}T${selectedTime}`),
    "HH:mm"
  ); // 14:00

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "troli0723@gmail.com",
      pass: "xvwp vufp psxi fmdz", // Az alkalmazás jelszót használd Gmail esetén
    },
  });

  // Megrendelő e-mail
  const customerMail = {
    from: "troli0723@gmail.com",
    to: email,
    subject: "Foglalás visszaigazolása",
    text: `Kedves ${name},\n\nKöszönjük a foglalást!\n\nIdőpont: ${formattedDate} ${formattedTime}\nSzolgáltatás: ${selectService}\n\nHamarosan találkozunk!\n\nBolyhos Hajszalon`,
  };

  // Neked értesítő e-mail
  const notifyMail = {
    from: "troli0723@gmail.com",
    to: "troli0723@gmail.com",
    subject: "Új foglalás a szalonban",
    text: `Új foglalás érkezett:\n\nNév: ${name}\nEmail: ${email}\nDátum: ${formattedDate}\nIdőpont: ${formattedTime}\nSzolgáltatás: ${selectService}`,
  };

  try {
    await transporter.sendMail(customerMail);
    await transporter.sendMail(notifyMail);
    return new Response(JSON.stringify({ message: "E-mailek elküldve!" }), {
      status: 200,
    });
  } catch (error) {
    console.error("E-mail hiba:", error);
    return new Response(
      JSON.stringify({ message: "Nem sikerült az e-mail küldés" }),
      { status: 500 }
    );
  }
}
