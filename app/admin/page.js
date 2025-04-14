import { redirect } from "next/navigation";
import { getReservations } from "../lib/supabase";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import LogoutButton from "../components/LogoutButton";

export default async function AdminPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    // Ha nincs bejelentkezés, átirányítjuk a login oldalra
    redirect("/admin/login");
  }

  let reservations = [];
  try {
    reservations = await getReservations(); // A foglalások lekérése
  } catch (error) {
    console.error("Error fetching reservations:", error);
  }

  return (
    <div>
      <h2>Admin Panel</h2>
      <p>Üdvözöljük, {session.user.name}!</p>
      <LogoutButton />
      <h3>Foglalasok:</h3>
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 text-left">ID</th>
              <th className="px-4 py-2 text-left">Név</th>
              <th className="px-4 py-2 text-left">Idő</th>
              <th className="px-4 py-2 text-left">Dátum</th>
              <th className="px-4 py-2 text-left">Szolgáltatás</th>
              <th className="px-4 py-2 text-left">Megjegyzés</th>
            </tr>
          </thead>
          <tbody>
            {reservations.map((reservation) => {
              const reservationDateTime = new Date(
                `${reservation.datum}T${reservation.ido}`
              );
              const now = new Date();
              const isPast = reservationDateTime < now;

              return (
                <tr
                  key={reservation.id}
                  className={`border-t ${
                    isPast ? "bg-red-100 text-gray-500" : ""
                  }`}
                >
                  <td className="px-4 py-2">{reservation.id}</td>
                  <td className="px-4 py-2">{reservation.nev}</td>
                  <td className="px-4 py-2">{reservation.ido}</td>
                  <td className="px-4 py-2">{reservation.datum}</td>
                  <td className="px-4 py-2">{reservation.szolgaltatas}</td>
                  <td className="px-4 py-2">{reservation.megjegyzes}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
