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
          <span className="self-center text-slate-600 bg-slate-200 p-2 rounded-3xl whitespace-nowrap text-xl font-semibold dark:text-white">
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
          <NavbarLink>Rólunk</NavbarLink>
        </Link>
        <Link to="services" smooth={true} duration={500}>
          <NavbarLink>Szolgáltatások</NavbarLink>
        </Link>
        <Link to="info" smooth={true} duration={500}>
          <NavbarLink href="#">Kapcsolat</NavbarLink>
        </Link>
      </NavbarCollapse>
    </Navbar>
  );
}
