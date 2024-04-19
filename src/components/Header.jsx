import React, { useEffect, useState, useRef } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { BsWhatsapp } from "react-icons/bs";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import { BsFillArrowDownCircleFill } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";

function Header({ children }) {
  // navigate menu

  const menu = useRef(null);

  const openNav = () => {
    const element = menu.current;
    element.style.height = "100%";
    element.style.opacity = "1";
  };
  const closeNav = () => {
    const element = menu.current;
    element.style.height = "0";
    element.style.opacity = "0";
  };

  // scroll change color

  const [scrollNav, setScrollNav] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const changeNav = () => {
    if (window.scrollY >= 70) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  // scroll navigate

  const positions = [
    {
      position: 0,
      path: "#home",
    },
    {
      position: 973,
      path: "#about",
    },
    {
      position: 1946,
      path: "#skills",
    },
    {
      position: 2919,
      path: "#summary",
    },
    {
      position: 4378.5,
      path: "#portfolio",
    },
    {
      position: 5351.5,
      path: "#contact",
    },
  ];

  const ScrollToScreen = (type) => {
    let position = window.scrollY + 80;
    let answer = positions[1];
    // console.log(current, "curr");
    positions.forEach((item, i) => {
      if (type === "down") {
        if (position > item.position && position < positions[i + 1].position) {
          answer = positions[i + 1];
          return;
        }
      } else {
        if (position < item.position && position > positions[i - 1].position) {
          if (i === 0) answer = positions[0];
          answer = positions[i - 2];
          return;
        } else {
          if (position > item.position) {
            console.log("se cumple");
            answer = positions[i - 1];
          }
        }
      }
    });
    window.scrollTo(80, answer.position);
    console.log(answer.position);
  };

  return (
    <div>
      <header
        className={`flex items-center transition-all fixed z-10 xl:h-[7vh] lg:h-[10vh] md:h-[10vh] max-sm:h-[10vh] left-0 right-0 top-0 cursor-pointer   max-sm:w-full ${
          scrollNav ? "bg-white shadow-md" : "bg-transparent"
        }`}
      >
        <div
          className="overlay-menu flex items-center justify-center text-2xl font-bold text-white"
          ref={menu}
        >
          <a href="javascript:void(0)" class="closebtn" onClick={closeNav}>
            &times;
          </a>
          <div class="flex flex-col justify-evenly items-center h-1/2">
            <a
              href="#home"
              className="hover:text-yellow-300 transition-all "
              onClick={closeNav}
            >
              Home
            </a>
            <a
              href="#about"
              onClick={closeNav}
              className="hover:text-yellow-300 transition-all "
            >
              About me
            </a>
            <a
              href="#skills"
              onClick={closeNav}
              className="hover:text-yellow-300 transition-all "
            >
              What I Do
            </a>
            <a
              href="#summary"
              className="hover:text-yellow-300 transition-all "
              onClick={closeNav}
            >
              Resume
            </a>
            <a
              href="#portfolio"
              className="hover:text-yellow-300 transition-all "
              onClick={closeNav}
            >
              Portfolio
            </a>
            <a
              href="#contact"
              className="hover:text-yellow-300 transition-all "
              onClick={closeNav}
            >
              Contact
            </a>
            <a
              href="https://github.com/glezrdg"
              className="flex items-center web-font font-bold hover:text-yellow-300 transition-all ml-3 mt-5 text-4xl"
              target="_blank"
            >
              GitHub
              <BsGithub className="ml-3" />
            </a>
          </div>
        </div>
        <nav
          className={`w-[100vw] xl:w-[68vw] xl:m-auto  md:mx-10 lg:mx-10 flex items-center justify-between web-font max-sm:w-full max-sm:px-2 `}
        >
          <h2 className="text-3xl  font-bold">
            <a href="#home">GERMÁN G.</a>
          </h2>

          <div className="flex items-center justify-between text-xl  xl:w-1/4 md:w-2/3 lg:w-1/3 max-sm:w-full  ">
            <a
              className="flex items-center mr-5 font-semibold  text-zinc-800  px-6 py-2 hover:scale-105 transition-all max-sm:text-lg max-sm:font-bold "
              href="https://wa.me/+18294649960"
            >
              <BsWhatsapp className="mr-4 max-sm:mr-2 " />
              <p>Whatsapp</p>
            </a>

            <div className="" onClick={openNav}>
              <RxHamburgerMenu className="text-4xl max-sm:text-3xl hover:scale-110 transition-all" />
            </div>
          </div>
        </nav>
        <div className="fixed md:hidden lg:hidden w-[5vw] h-[15vh]  xl:flex flex-col justify-between items-center top-[50%] right-0 z-50 cursor-pointer max-sm:hidden">
          <div onClick={() => ScrollToScreen("up")} className="">
            <BsFillArrowUpCircleFill className=" text-6xl text-zinc-800 hover:scale-110 hover:bg-red-500 rounded-full m-0 p-0 transition-all" />
          </div>
          <div onClick={() => ScrollToScreen("down")}>
            <BsFillArrowDownCircleFill className="text-6xl text-zinc-800 hover:scale-110 hover:bg-red-500 rounded-full m-0 p-0 transition-all" />
          </div>
        </div>
      </header>
      <main className="xl:w-[68vw] lg:w-[100vw] md:w-[100vw] max-sm:w-[100vw] bg-yellow-300 h-[100vh] m-auto max-sm:m-0 text-zinc-800  relative">
        <div className="absolute top-0 bottom-0 -right-[16vw] xl:flex lg:hidden md:hidden -z-10 -left-[16vw] bg-yellow-300 max-sm:hidden "></div>

        {children}
      </main>
    </div>
  );
}

export default Header;
