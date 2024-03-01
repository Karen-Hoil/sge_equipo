import React from "react";
import Proyecto from "../img/proyectos.png";
import Estudiante from "../img/estudiantes.png";
import Asesores from "../img/asesores.png";
import Documento from "../img/documentos.png";
import HeaderPresi from "../components/headerPresi";

function Modulo6() {
  return (
    <>
      <HeaderPresi />
      <div className="text-zinc-400 border-b border-zinc-400 px-5 py-3 text-xl mx-5">
        Bienvenido (Presidente)!
      </div>
      <div className="ag-format-container">
        <div className="flex flex-wrap justify-between items-start px-0 md:px-4 py-8">
          <div className="w-full md:w-1/2 mb-6 md:mb-0">
            <a
              href="#"
              className="block p-4 rounded-xl ag-courses-item shadow hover:bg-blue-300 hover:text-black transition duration-300 relative mr-30 ml-20"
            >
              <div className="h-32 mb-4 flex items-center justify-center">
                <img src={Proyecto} alt="Proyectos" className="h-full" />
              </div>
              <div className="text-xl font-bold">Proyectos</div>
              <div>Proyectos del área de ingeniería</div>
            </a>
          </div>
          <div className="w-full md:w-1/2 mb-6 md:mb-0">
            <a
              href="#"
              className="block p-4 rounded-xl ag-courses-item shadow hover:bg-blue-300 hover:text-black transition duration-300 relative ml-10"
            >
              <div className="h-32 mb-4 flex items-center justify-center">
                <img src={Asesores} alt="Documentos" className="h-full" />
              </div>
              <div className="text-xl font-bold">Asesores</div>
              <div>Asesores del área de ingeniería</div>
            </a>
          </div>
          <div className="w-full md:w-1/2 mb-6 md:mb-0">
            <a
              href="#"
              className="block p-4 rounded-xl ag-courses-item shadow hover:bg-blue-300 hover:text-black transition duration-300 relative mr-30 ml-10"
            >
              <div className="h-32 mb-4 flex items-center justify-center">
                <img src={Estudiante} alt="Asesores" className="h-full" />
              </div>
              <div className="text-xl font-bold">Estudiantes</div>
              <div>Estudiantes del área de ingeniería</div>
            </a>
          </div>
          <div className="w-full md:w-1/2 mb-6 md:mb-0">
            <a
              href="#"
              className="block p-4 rounded-xl ag-courses-item shadow hover:bg-blue-300 hover:text-black transition duration-300 relative ml-10"
            >
              <div className="h-32 mb-4 flex items-center justify-center">
                <img src={Documento} alt="Estudiantes" className="h-full" />
              </div>
              <div className="text-xl font-bold">Documentos</div>
              <div>Documentos de estudiantes y asesores</div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Modulo6;
