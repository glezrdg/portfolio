import React from "react";
import "./portfolio.css";
// Assuming the other imports remain the same

// Import the InstagramPost component here
const Images = [
  
 
  "./bcdc/bcdc3.jpg",
  "./bcdc/bcdc4.jpg",
  "./bcdc/bcdc5.jpg",
  "./bcdc/bcdc6.jpg",
  "./bcdc/bcdc7.jpg",
  "./Biocaribe/biocaribe2.jpg",
  "./Biocaribe/biocaribe1.jpg",
  "./Biocaribe/biocaribe.jpg",
  "./FOTOS SHEETROCK/s1.jpg",
  "./FOTOS SHEETROCK/s2.jpg",
  "./FOTOS SHEETROCK/s3.jpg",
  "./FOTOS SHEETROCK/s4.jpg",
  "./FOTOS SHEETROCK/s5.jpg",
  "./FOTOS SHEETROCK/s6.jpg",
  "./FOTOS SHEETROCK/s7.jpeg",
  "./FOTOS SHEETROCK/s8.jpeg",
  "./FOTOS SHEETROCK/s9.jpeg",
  "./FOTOS SHEETROCK/s10.jpeg",
  "./FOTOS SHEETROCK/s11.jpeg",
  "./FOTOS SHEETROCK/s12.jpeg",
  "./FOTOS SHEETROCK/s13.jpeg",
  "./FOTOS SHEETROCK/s14.jpg",
  
  "./parque habitat/PHC.jpg",
  "./parque habitat/PHC 2.jpg",
  "./PedidosYa/foto1.jpg",
  "./PedidosYa/foto2.jpg",
  "./PedidosYa/foto3.jpg",
  "./PedidosYa/foto4.jpg",
  "./PedidosYa/foto5.jpg",
  "./PedidosYa/foto6.jpg",
  "./hangar/hangar1.jpg",
  "./hangar/hangar2.jpg",
  "./hangar/hangar3.jpg",
  "./hangar/hangar4.jpg",
  "./hangar/hangar5.jpg",
  "./alameda/ana1.jpg",
  "./alameda/ana2.jpg",
  "./alameda/ana3.jpg",
  "./aniomis/ani1.jpg",
  "./aniomis/ani2.jpg",
  "./aniomis/ani3.jpg",
  "./aniomis/ani4.jpg",
  "./aniomis/ani5.jpg",
  "./aniomis/ani6.jpg",
  "./aniomis/ani7.jpg",
  "./aniomis/ani8.jpg",
  "./aniomis/ani9.jpg",
  "./aniomis/ani10.jpg",
  "./aniomis/ani11.jpg",
  "./aniomis/ani12.jpg",
  "./2017 project/este1.jpg",
  "./2017 project/este2.jpg",
  "./2017 project/este3.jpg",
  "./2017 project/este4.jpg",
  "./2017 project/este5.jpg",
  "./2017 project/este6.jpg",
  "./2017 project/este7.jpg",
  "./2017 project/este8.jpg",
  "./2017 project/este9.jpg",
];

const Portfolio = () => {
  return (
    <section
      id="portfolio"
      className="xl:h-[150vh] md:h-[140vh] max-sm:h-[190vh] flex flex-col items-center justify-evenly relative "
    >
      <div className="absolute top-0 bottom-0 -right-[16vw] -z-10 -left-[16vw]  md:hidden lg:hidden max-sm:hidden xl:flex"></div>

      <div className="text-center mt-[12vh] mb-20">
        <span className="bg-[#7f2627] text-zinc-200 p-1">Portafolio</span>
        <h1 className="text-5xl max-sm:text-4xl font-semibold mt-5">
          Algunos de los proyectos que hemos trabajado
        </h1>
      </div>

      <div className="gallery overflow-y-scroll p-4">
        {Images.map((item) => (
          <div className="gallery-item r">
            <img src={item} alt="" className="rounded-md shadow-sm" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
