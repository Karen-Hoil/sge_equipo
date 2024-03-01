import React from "react";
import logo from '../img/UT.png'
import user from '../img/user.png'
import Header from "../components/header";

function Modulo4() {
  return (
    <>
      <Header/>
      <div className="text-zinc-400 border-b border-zinc-400 px-5 py-3 text-xl mx-5">
        Bienvenido (docente)!
      </div>
      <div className="titulo">
        <h1 className="px-10 py-3 text-3xl font-bold">Control de alumnos asesorados</h1>
      </div>
      <div className="container mt-10">
        <div className="flex flex-wrap justify-center">
          <div className="container__items border rounded-lg shadow-md p-4 mx-10 my-5 max-w-md">
            <h6 className="text-xl text-center text-blue-600">Estudiante #</h6>
            <p>Proyecto:$proyecto</p>
            <p>Matricula:$matricula</p>
          </div>
          <div className="container__items border rounded-lg shadow-md p-4 mx-10 my-5 max-w-md">
            <h6 className="text-xl text-center text-blue-600">Estudiante #</h6>
            <p>Proyecto:$proyecto</p>
            <p>Matricula:$matricula</p>
          </div>
        </div>
        <div className="flex flex-wrap justify-center">
          <div className="container__items border rounded-lg shadow-md p-4 mx-10 my-5 max-w-md">
            <h6 className="text-xl text-center text-blue-600">Estudiante #</h6>
            <p>Proyecto:$proyecto</p>
            <p>Matricula:$matricula</p>
          </div>
          <div className="container__items border rounded-lg shadow-md p-4 mx-10 my-5 max-w-md">
            <h6 className="text-xl text-center text-blue-600">Estudiante #</h6>
            <p>Proyecto:$proyecto</p>
            <p>Matricula:$matricula</p>
          </div>
        </div>
        <div className="flex flex-wrap justify-center">
          <div className="container__items border rounded-lg shadow-md p-4 mx-10 my-5 max-w-md">
            <h6 className="text-xl text-center text-blue-600">Estudiante #</h6>
            <p>Proyecto:$proyecto</p>
            <p>Matricula:$matricula</p>
          </div>
          <div className="container__items border rounded-lg shadow-md p-4 mx-10 my-5 max-w-md">
            <h6 className="text-xl text-center text-blue-600">Estudiante #</h6>
            <p>Proyecto:$proyecto</p>
            <p>Matricula:$matricula</p>
          </div>
        </div>
        <div className="flex flex-wrap justify-center">
          <div className="container__items border rounded-lg shadow-md p-4 mx-10 my-5 max-w-md">
            <h6 className="text-xl text-center text-blue-600">Estudiante #</h6>
            <p>Proyecto:$proyecto</p>
            <p>Matricula:$matricula</p>
          </div>
          <div className="container__items border rounded-lg shadow-md p-4 mx-10 my-5 max-w-md">
            <h6 className="text-xl text-center text-blue-600">Estudiante #</h6>
            <p>Proyecto:$proyecto</p>
            <p>Matricula:$matricula</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Modulo4;

// import logo from '../img/UT.png'
// import user from '../img/user.png'
// import './modulo4.css'

//Módulo 4: Control de Alumnos Asesorados:

// function Modulo4() {
//   return (
//     <>
//       <header>
//         <nav class="bg-blue-700 p-4">
//           <div class="flex-item logo">
//             <img src={logo} alt="logo-ut" class="header__nav" />
//           </div>
//           <div class="flex-item">
//             <ul>
//               <li class="div__ul-li">
//                 <a class="ul__li-a">Gestión de estadias</a>
//               </li>
//               <li class="div__ul-li">
//                 <a class="ul__li-a">Proyecto</a>
//               </li>
//               <li class="div__ul-li">
//                 <a class="ul__li-a">Calendario</a>
//               </li>
//               <li class="div__ul-li">
//                 <a class="ul__li-a">Documentos</a>
//               </li>
//             </ul>
//           </div>
//           <div class="flex-item user-img">
//             <img src={user} alt="User"/>
//           </div>
//         </nav>
//       </header>
//       <div class="saludo">
//       Bienvenido (docente)!
//       </div>
//       <div class="titulo">
//         <h1>Control de alumnos asesorados</h1>
//       </div>
//       <div class="container">
//         <div class="container__fila">
//           <div class="container__items">
//             <h6>Estudiante #</h6>
//             <p>Proyecto:$proyecto</p>
//             <p>Matricula:$matricula</p>
//           </div>
//           <div class="container__items">
//             <h6>Estudiante #</h6>
//             <p>Proyecto:$proyecto</p>
//             <p>Matricula:$matricula</p>
//           </div>
//         </div>
//         <div class="container__fila">
//           <div class="container__items">
//             <h6>Estudiante #</h6>
//             <p>Proyecto:$proyecto</p>
//             <p>Matricula:$matricula</p>
//           </div>
//           <div class="container__items">
//             <h6>Estudiante #</h6>
//             <p>Proyecto:$proyecto</p>
//             <p>Matricula:$matricula</p>
//           </div>
//         </div>
//         <div class="container__fila">
//           <div class="container__items">
//             <h6>Estudiante #</h6>
//             <p>Proyecto:$proyecto</p>
//             <p>Matricula:$matricula</p>
//           </div>
//           <div class="container__items">
//             <h6>Estudiante #</h6>
//             <p>Proyecto:$proyecto</p>
//             <p>Matricula:$matricula</p>
//           </div>
//         </div>
//         <div class="container__fila">
//           <div class="container__items">
//             <h6>Estudiante #</h6>
//             <p>Proyecto:$proyecto</p>
//             <p>Matricula:$matricula</p>
//           </div>
//           <div class="container__items">
//             <h6>Estudiante #</h6>
//             <p>Proyecto:$proyecto</p>
//             <p>Matricula:$matricula</p>
//           </div>
//         </div>
//       </div>
//     </>
//   )
// }

// export default Modulo4;