"use client";
import { Element } from "react-scroll";

const hairServices = [
  {
    title: "Női hajvágás",
    description:
      "Professzionális hajvágás, személyre szabott stílustanácsadással.",
    price: "6000 Ft",
  },
  {
    title: "Férfi hajvágás",
    description:
      "Modern vagy klasszikus férfi hajvágás, precíz munkavégzéssel.",
    price: "4000 Ft",
  },
  {
    title: "Gyerek hajvágás",
    description:
      "Vidám hangulatú hajvágás a legkisebbeknek, türelmes fodrásszal.",
    price: "3500 Ft",
  },
  {
    title: "Hajfestés",
    description:
      "Teljes hajfestés prémium minőségű festékkel, színválasztási tanácsadással.",
    price: "12000 Ft-tól",
  },
  {
    title: "Melír",
    description:
      "Természetes hatású vagy extra színes melír, hajkímélő technológiával.",
    price: "10000 Ft-tól",
  },
  {
    title: "Frizurakészítés alkalmakra",
    description:
      "Esküvőkre, rendezvényekre, alkalmi kontyok és frizurák készítése.",
    price: "8000 Ft-tól",
  },
];

function Services() {
  return (
    <Element name="services">
      <div className="bg-gray-100 min-h-screen p-6">
        <h2 className="text-3xl font-bold text-center mb-8">
          Fodrászati Szolgáltatások
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {hairServices.map((service, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <p className="text-pink-600 font-bold text-lg">{service.price}</p>
            </div>
          ))}
        </div>
      </div>
    </Element>
  );
}

export default Services;
