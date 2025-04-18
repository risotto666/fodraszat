"use client";
import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import { useRouter } from "next/navigation";
import { Link } from "react-scroll";

export default function Nav() {
  const router = useRouter();
  const handleRedirect = () => {
    // Navigálás a "/dashboard" oldalra
    router.push("/booking");
  };
  return (
    <Navbar fluid rounded className="fixed w-full">
      <Link to="hero" smooth={true} duration={500}>
        <NavbarBrand href="/">
          <span className="self-center  whitespace-nowrap text-xl font-semibold dark:text-white">
            Bolyhos hajszalon
          </span>
        </NavbarBrand>
      </Link>
      <div className="flex md:order-2">
        <Link href="/booking">
          <Button onClick={handleRedirect}>Időpont foglalás</Button>
        </Link>
        <NavbarToggle />
      </div>
      <NavbarCollapse>
        <Link to="about" smooth={true} duration={500}>
          <NavbarLink href="/about">Rólunk</NavbarLink>
        </Link>
        <Link to="services" smooth={true} duration={500}>
          <NavbarLink href="/services">Szolgáltatások</NavbarLink>
        </Link>
        <Link to="gallery" smooth={true} duration={500}>
          <NavbarLink href="/gallery">Galéria</NavbarLink>
        </Link>
        <Link to="info" smooth={true} duration={500}>
          <NavbarLink href="/contact">Kapcsolat</NavbarLink>
        </Link>
        <Link to="map" smooth={true} duration={500}>
          <NavbarLink href="/map">
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
          </NavbarLink>
        </Link>
      </NavbarCollapse>
    </Navbar>
  );
}
