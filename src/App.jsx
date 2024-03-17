import "./App.css";
import { RiWhatsappFill } from "react-icons/ri";
import { RxHamburgerMenu } from "react-icons/rx";

import Header from "./components/Header";
import Home from "./pages/home/home";
import About from "./pages/about/about-me";
import Skills from "./pages/services/skills";
import Summary from "./pages/summary";
import Portfolio from "./pages/works/portfolio";
import Contact from "./pages/contact/contact";

function App() {
  return (
    <Header>
      <Home />
      <Skills />
      <Portfolio />
      <About />
      <Summary />
      <Contact />
    </Header>
  );
}

export default App;
