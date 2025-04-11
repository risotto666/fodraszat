import Hero from "./components/Hero";
import Info from "./components/Info";
import Services from "./components/Services";
import About from "./components/About";
import Nav from "./components/Navbar";
/* npm i react-scroll */
export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <Info />
      <About />
      <Services />
    </>
  );
}
