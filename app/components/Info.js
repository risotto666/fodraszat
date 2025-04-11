"use client";
import { Button } from "flowbite-react";
import Link from "next/link";
import { Element } from "react-scroll";

function Info() {
  return (
    <Element name="info">
      <div className="lg:grid-cols-3 grid px-6   gap-8 mt-12">
        <div className="font-serif">
          <h1 className="text-center text-gray-800 text-shadow-slate-500 text-shadow-md uppercase text-3xl font-bold mb-4">
            Bolyhos hajszalon
          </h1>

          <p className="text-left text-slate-600  ">
            Bolyhos egy olyan hely, ahol a hajápolás és a stílus találkozik a
            szakértelemmel és a kreativitással. Mi nem csak hajvágásokat és
            frizurákat készítünk, hanem egyéni stílust formálunk, amely tükrözi
            a személyiségedet és életstílusodat. Munkánkat mindig a legújabb
            trendek és technikák alapján végezzük, hogy ügyfeleink mindig a
            legjobb formájukat hozzák.
          </p>
          <Link href="/booking">
            <Button className="mx-auto mt-2" color="alternative">
              Időpont foglalás
            </Button>
          </Link>
        </div>
        <div className="grid justify-self-center">
          <div className="flex gap-2">
            <svg
              class="w-6 h-6 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fill-rule="evenodd"
                d="M11.906 1.994a8.002 8.002 0 0 1 8.09 8.421 7.996 7.996 0 0 1-1.297 3.957.996.996 0 0 1-.133.204l-.108.129c-.178.243-.37.477-.573.699l-5.112 6.224a1 1 0 0 1-1.545 0L5.982 15.26l-.002-.002a18.146 18.146 0 0 1-.309-.38l-.133-.163a.999.999 0 0 1-.13-.202 7.995 7.995 0 0 1 6.498-12.518ZM15 9.997a3 3 0 1 1-5.999 0 3 3 0 0 1 5.999 0Z"
                clip-rule="evenodd"
              />
            </svg>

            <div>
              <p>124 The Sycamores Cambridge</p>
              <p>United Kingdom</p>
              <p>CB24 6ZN</p>
            </div>
          </div>
          <div>
            <p className="flex gap-2">
              <svg
                class="w-6 h-6 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M7.978 4a2.553 2.553 0 0 0-1.926.877C4.233 6.7 3.699 8.751 4.153 10.814c.44 1.995 1.778 3.893 3.456 5.572 1.68 1.679 3.577 3.018 5.57 3.459 2.062.456 4.115-.073 5.94-1.885a2.556 2.556 0 0 0 .001-3.861l-1.21-1.21a2.689 2.689 0 0 0-3.802 0l-.617.618a.806.806 0 0 1-1.14 0l-1.854-1.855a.807.807 0 0 1 0-1.14l.618-.62a2.692 2.692 0 0 0 0-3.803l-1.21-1.211A2.555 2.555 0 0 0 7.978 4Z" />
              </svg>
              07476364820
            </p>
          </div>
          <div className="flex gap-2">
            <svg
              class="w-6 h-6 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M2.038 5.61A2.01 2.01 0 0 0 2 6v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6c0-.12-.01-.238-.03-.352l-.866.65-7.89 6.032a2 2 0 0 1-2.429 0L2.884 6.288l-.846-.677Z" />
              <path d="M20.677 4.117A1.996 1.996 0 0 0 20 4H4c-.225 0-.44.037-.642.105l.758.607L12 10.742 19.9 4.7l.777-.583Z" />
            </svg>

            <p>troli0723@gmail.com</p>
          </div>
        </div>
        <div>
          <div class="max-w-sm mx-auto font-serif ">
            <ul>
              <li class="flex justify-between border-b border-gray-200 py-1">
                <span>Hétfő</span>
                <span>08:00 - 16:00</span>
              </li>
              <li class="flex justify-between border-b border-gray-200 py-1">
                <span>Kedd</span>
                <span>08:00 - 16:00</span>
              </li>
              <li class="flex justify-between border-b border-gray-200 py-1">
                <span>Szerda</span>
                <span>08:00 - 16:00</span>
              </li>
              <li class="flex justify-between border-b border-gray-200 py-1">
                <span>Csütörtök</span>
                <span>08:00 - 16:00</span>
              </li>
              <li class="flex justify-between border-b border-gray-200 py-1">
                <span>Péntek</span>
                <span>08:00 - 16:00</span>
              </li>
              <li class="flex justify-between border-b border-gray-200 py-1">
                <span>Szombat</span>
                <span>Zárva</span>
              </li>
              <li class="flex justify-between border-b border-gray-200 py-1">
                <span>Vasárnap</span>
                <span>Zárva</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Element>
  );
}

export default Info;
