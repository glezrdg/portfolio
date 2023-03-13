import "./App.css";
import { RiWhatsappFill } from "react-icons/ri";
import { RxHamburgerMenu } from "react-icons/rx";

import Header from "./components/Header";
import Home from "./pages/home";
import About from "./pages/about-me";
import Skills from "./pages/skills";
import Summary from "./pages/summary";
import Portfolio from "./pages/portfolio";
import Contact from "./pages/contact";

function App() {
  return (
    <Header>
      <Home />
      <About />
      <Skills />
      <Summary />
      <Portfolio />
      <Contact />
    </Header>
  );
}

export default App;
