import nodemailer from "nodemailer";
import { format } from "date-fns";
import { hu } from "date-fns/locale";

export async function POST(req) {
  const { name, email, selectedDate, selectedTime, selectService, comment } =
    await req.json();

  // Dátum és idő formázása
  const formattedDate = format(new Date(selectedDate), "yyyy. MMMM dd.", {
    locale: hu,
  }); // 2025. április 11.
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

    html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6;">
        <h2>Kedves ${name}!</h2>
        <p>Köszönjük a foglalást!</p>
        <p><strong>Időpont:</strong> ${formattedDate} ${formattedTime}</p>
        <p><strong>Szolgáltatás:</strong> ${selectService}</p>
  
        <p>Hamarosan találkozunk!</p>
  
        <img 
          src="https://i.postimg.cc/N0cVjyqs/temp-Imagefi-Ph-Qp.avif" 
          alt="Bolyhos Hajszalon" 
          style="margin-top: 20px; width: 150px;" 
        />
  
        <p style="margin-top: 30px;">Üdvözlettel:<br><strong>Bolyhos Hajszalon</strong></p>
      </div>
    `,
  };

  //https://imgur.com/a/Siw0hqi
  // Neked értesítő e-mail
  const notifyMail = {
    from: "troli0723@gmail.com",
    to: "troli0723@gmail.com",
    subject: "Új foglalás a szalonban",

    text: `Új foglalás érkezett:\n\nNév: ${name}\nEmail: ${email}\nDátum: ${formattedDate}\nIdőpont: ${formattedTime}\nSzolgáltatás: ${selectService}\nMegjegyzés: ${comment}`,
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
