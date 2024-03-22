import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className=" h-[120vh] lg:h-[100vh] md:h-[120vh] max-sm:h-full    flex flex-col items-center justify-center  "
    >
      <div className="text-center   xl:h-[10vh] ">
        <span className="bg-[#7f2627] text-zinc-200 p-1">Historia</span>
        <h2 className="text-5xl max-sm:mt-2  font-semibold xl:mt-5 lg:mt-2 md:mt-0 ">
          Te contamos de donde venimos
        </h2>
      </div>
      <div className=" xl:h-3/5  h-4/5 flex flex-col justify-evenly items-center ">
        <div className="flex xl:flex-row xl:w-full lg:flex-col lg:justify-evenly lg:items-center md:flex-col md:justify-evenly md:items-center max-sm:flex-col max-sm:items-center ">
          <div className="xl:w-2/3 xl:m-0 lg:w-3/5  flex  md:w-[80vw] max-sm:w-full  max-sm:text-center max-sm:px-4">
            <div className="text-sm text-justify">
              <p>
                Desde las vibrantes calles de Manzanillo, Cuba, hasta el corazón
                cultural de la República Dominicana, la historia de SibaIkole y
                su fundador, el Arq. Germán González González, es una odisea
                arquitectónica que atraviesa continentes, culturas y décadas de
                innovación. Nacido en 1961 y graduado de la Universidad del
                Oriente en Santiago de Cuba, el Arq. González ha llevado su
                pasión por el diseño y la arquitectura a través de fronteras y
                océanos, dejando una marca indeleble en cada proyecto que toca.
                <br />
                <br />
                La semilla de SibaIkole fue plantada en los fértiles suelos de
                la imaginación y el ingenio del Arq. González durante sus
                primeros años en Cuba, donde desde 1989 hasta 2001, se dedicó a
                transformar el paisaje urbano de Bayamo, a diseñar viviendas
                económicas que desafiaban los límites del diseño convencional, y
                a revolucionar espacios con cambios de uso que iban desde lo
                residencial hasta lo comercial. Cada proyecto, desde esquemas
                urbanísticos para centenares de viviendas hasta diseños
                detallados de cafeterías, llevaba consigo un pedazo de su visión
                para mejorar la vida de las personas a través de espacios más
                funcionales y estéticamente agradables.
                <br />
                <br />
                Pero el viaje apenas comenzaba. En 1992, el destino llevó al
                Arq. González a Angola, donde su habilidad para transformar y
                reimaginar espacios se manifestó en la remodelación de las
                oficinas y talleres de la radio y televisión de Luanda, la
                residencia del Gobernador, y un hospital de 100 camas. Estos
                proyectos no solo fueron retos arquitectónicos; fueron también
                encuentros con culturas y comunidades, aprendiendo y adaptando
                su enfoque para cumplir con las necesidades locales sin perder
                su distintivo toque de innovación.
              </p>
            </div>
            <div className="text-sm">
              <p>
                Al regresar al Caribe, esta vez a la República Dominicana, el
                Arq. González continuó expandiendo su visión a través de
                "Orbitarq" y luego como contratista independiente, colaborando
                en proyectos de alto perfil como "Las Terrazas" en Piantini y
                villas de lujo en Cap Cana Juanillo Bay. Su obra en la República
                Dominicana es un testimonio de su capacidad para liderar y
                ejecutar proyectos complejos, desde torres empresariales en la
                emblemática esquina Churchill hasta la creación de espacios
                residenciales que combinan lujo y funcionalidad.
                <br />
                <br />
                La creación de SibaIkole SRL marcó el comienzo de un nuevo
                capítulo, uniendo bajo una sola firma la rica herencia de
                experiencia, la visión arquitectónica innovadora y un compromiso
                con la excelencia en diseño, construcción y remodelación. Cada
                proyecto, ya sea un salón spa, una farmacia o viviendas
                residenciales, es una narrativa de transformación y belleza, un
                equilibrio entre funcionalidad y estética.
                <br />
                <br />
                SibaIkole, bajo la guía visionaria del Arq. Germán González
                González, es más que una firma de arquitectura; es una historia
                de pasión por la arquitectura, un legado de innovación y un
                puente entre culturas y comunidades. A través de cada línea,
                plano y espacio creado, SibaIkole invita a experimentar la
                arquitectura no solo como estructuras, sino como escenarios de
                vida, sueños y futuros posibles. Bienvenidos al mundo de
                SibaIkole, donde cada proyecto es una página en nuestra historia
                colectiva, escrita con el lenguaje universal de la belleza
                y la innovación.
              </p>
            </div>
          </div>
        </div>
        <div className="grid xl:grid-cols-4 xl:place-items-start lg:grid-cols-2 lg:gap-3 lg:place-items-center md:grid-cols-2 md:gap-3 md:place-items-center w-full font-bold max-sm:grid-cols-2 max-sm:px-5">
          <div>
            <span className="text-stone-700">Name:</span>
            <h2 className="text-2xl max-sm:text-lg font-bold">
              Germán González
            </h2>
          </div>
          <div className="flex flex-col">
            <span className="text-stone-700">Certificates:</span>
            <a
              href="https://platzi.com/p/glezrdg"
              className="text-2xl max-sm:text-lg font-bold hover:scale-105 transition-all"
            >
              Platzi.com/p/glezrdg
            </a>
          </div>
          <div>
            <span className="text-stone-700">E-mail:</span>
            <h2 className="text-2xl max-sm:text-lg font-bold select-text">
              Glezrdg@gmail.com
            </h2>
          </div>
          <div>
            <span className="text-stone-700">From:</span>
            <h2 className="text-2xl max-sm:text-lg font-bold">
              Santo Domingo, DR
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
