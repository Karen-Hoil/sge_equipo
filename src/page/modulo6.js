import React from "react";
import Proyecto from "../img/proyectos.png"
import Estudiante from "../img/estudiantes.png"
import Asesores from "../img/asesores.png"
import Documento from "../img/documentos.png"
import HeaderPresi from "../components/headerPresi";

//Módulo 1: Dashboard presidente:

function Modulo6 (){
    return(
        <>
        <HeaderPresi/>
        <div class="saludo">
        <h2>Bienvenido (Presidente)!</h2>
      </div>
      <div className="ag-format-container">
  <div className="ag-courses_box">
    <div className="ag-courses_item shadow-drop-bl">
      <a href="#" className="ag-courses-item_link">
        <div className="ag-courses-item_bg" />
        <div style={{ display: "flex" }}>
          <img src={Proyecto} alt="..." style={{ height: 100 }} />
          <div className="ag-courses-item_title" style={{textDecoration:"none"}}>Proyectos</div>
        </div>
        <div className="ag-courses-item_date-box" style={{textDecoration:"none"}}>
          Proyectos del área de ingeniería
        </div>
      </a>
    </div>
    <div className="ag-courses_item shadow-drop-bl">
      <a href="#" className="ag-courses-item_link">
        <div className="ag-courses-item_bg" />
        <div style={{ display: "flex" }}>
          <img src={Asesores} alt="..." style={{ height: 100 }} />
          <div className="ag-courses-item_title">Asesores</div>
        </div>
        <div className="ag-courses-item_date-box">
          Asesores del área de ingeniería
        </div>
      </a>
    </div>
    <div className="ag-courses_item shadow-drop-bl">
      <a href="#" className="ag-courses-item_link">
        <div className="ag-courses-item_bg" />
        <div style={{ display: "flex" }}>
          <img src={Estudiante} alt="..." style={{ height: 100 }} />
          <div className="ag-courses-item_title">Estudiantes</div>
        </div>
        <div className="ag-courses-item_date-box">
          Estudiantes del área de ingeniería
        </div>
      </a>
    </div>
    <div className="ag-courses_item shadow-drop-bl">
      <a href="#" className="ag-courses-item_link">
        <div className="ag-courses-item_bg" />
        <div style={{ display: "flex" }}>
          <img src={Documento} alt="..." style={{ height: 100 }} />
          <div className="ag-courses-item_title">Documentos</div>
        </div>
        <div className="ag-courses-item_date-box">
          Documentos de estudiantes y asesores
        </div>
      </a>
    </div>
  </div>
</div>

        </>
    )
}
export default Modulo6