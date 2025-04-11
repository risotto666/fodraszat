import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Bolyhos hajszalon - Friss frizurák, stílusos hajvágások",
  description: "Stílusos hajvágás mindenkinek",
  keywords:
    "hajvágás, frizura, hajszalon, melír, keratin kezelés, férfi hajvágás, női hajvágás, styling, hajápolás",

  // Open Graph metaadatok
  openGraph: {
    title: "Bolyhos Hajszalon - Friss frizurák, stílusos hajvágások",
    description:
      "A Bolyhos Hajszalon a legújabb trendeknek megfelelő frizurákat, hajvágásokat és styling szolgáltatásokat kínál. Látogasson el hozzánk, hogy ragyogjon!",
    url: "https://www.bolyhoshajszalon.hu",
    images: [
      {
        url: "hair.jpg.webp", // Itt adj meg egy képet, amit a közösségi médiában előnézeti képként használunk
        width: 1200,
        height: 630,
        alt: "Bolyhos Hajszalon",
      },
    ],
    type: "website",
  },
  icons: {
    icon: "/icon.png", // Itt add meg a weboldal faviconját
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
