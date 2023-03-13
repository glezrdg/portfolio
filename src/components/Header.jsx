import React, { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { BsWhatsapp } from "react-icons/bs";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import { BsFillArrowDownCircleFill } from "react-icons/bs";

function Header({ children }) {
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
      position: 4183.890625,
      path: "#portfolio",
    },
    {
      position: 5156.890625,
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
        className={`flex items-center transition-all fixed z-10 h-[7vh] left-0 right-0 top-0 cursor-pointer ${
          scrollNav ? "bg-white shadow-md" : "bg-transparent"
        }`}
      >
        <nav
          className={`w-[100vw] md:w-[68vw] m-auto flex items-center justify-between web-font`}
        >
          <h2 className="text-3xl  font-bold">
            <a href="#home">GERMÁN </a>
          </h2>
          <div className="flex items-center justify-between text-xl  w-1/4 ">
            <a
              className="flex items-center mr-5 font-semibold  text-zinc-800  px-6 py-2 hover:scale-105 transition-all "
              href="https://wa.me/+18294649960"
            >
              <BsWhatsapp className="mr-4 text-2xl" />
              <p>+1 (829)-464-9960</p>
            </a>

            <RxHamburgerMenu className="text-4xl " />
          </div>
        </nav>
        <div className="fixed  w-[5vw] h-[15vh]  flex flex-col justify-between items-center top-[50%] right-0 z-50 cursor-pointer">
          <div onClick={() => ScrollToScreen("up")} className="">
            <BsFillArrowUpCircleFill className=" text-6xl text-zinc-800 hover:scale-110 hover:bg-red-500 rounded-full m-0 p-0 transition-all" />
          </div>
          <div onClick={() => ScrollToScreen("down")}>
            <BsFillArrowDownCircleFill className="text-6xl text-zinc-800 hover:scale-110 hover:bg-red-500 rounded-full m-0 p-0 transition-all" />
          </div>
        </div>
      </header>
      <main className="xl:w-[68vw] h-[100vh] m-auto text-zinc-800  relative">
        <div className="absolute top-0 bottom-0 -right-[16vw] -z-10 -left-[16vw] bg-yellow-300 "></div>

        {children}
      </main>
    </div>
  );
}

export default Header;
