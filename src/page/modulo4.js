import React from "react";
import logo from '../img/UT.png'
import user from '../img/user.png'
import './modulo4.css'

//Módulo 4: Control de Alumnos Asesorados:

function Modulo4() {
  return (
    <>
      <header>
        <nav class="nav">
          <div class="flex-item logo">
            <img src={logo} alt="logo-ut" class="header__nav" />
          </div>
          <div class="flex-item">
            <ul>
              <li class="div__ul-li">
                <a class="ul__li-a">Gestión de estadias</a>
              </li>
              <li class="div__ul-li">
                <a class="ul__li-a">Proyecto</a>
              </li>
              <li class="div__ul-li">
                <a class="ul__li-a">Calendario</a>
              </li>
              <li class="div__ul-li">
                <a class="ul__li-a">Documentos</a>
              </li>
            </ul>
          </div>
          <div class="flex-item user-img">
            <img src={user} alt="User"/>
          </div>
        </nav>
      </header>
      <div class="saludo">
      Bienvenido (docente)!
      </div>
      <div class="titulo">
        <h1>Control de alumnos asesorados</h1>
      </div>
      <div class="container">
        <div class="container__fila">
          <div class="container__items">
            <h6>Estudiante #</h6>
            <p>Proyecto:$proyecto</p>
            <p>Matricula:$matricula</p>
          </div>
          <div class="container__items">
            <h6>Estudiante #</h6>
            <p>Proyecto:$proyecto</p>
            <p>Matricula:$matricula</p>
          </div>
        </div>
        <div class="container__fila">
          <div class="container__items">
            <h6>Estudiante #</h6>
            <p>Proyecto:$proyecto</p>
            <p>Matricula:$matricula</p>
          </div>
          <div class="container__items">
            <h6>Estudiante #</h6>
            <p>Proyecto:$proyecto</p>
            <p>Matricula:$matricula</p>
          </div>
        </div>
        <div class="container__fila">
          <div class="container__items">
            <h6>Estudiante #</h6>
            <p>Proyecto:$proyecto</p>
            <p>Matricula:$matricula</p>
          </div>
          <div class="container__items">
            <h6>Estudiante #</h6>
            <p>Proyecto:$proyecto</p>
            <p>Matricula:$matricula</p>
          </div>
        </div>
        <div class="container__fila">
          <div class="container__items">
            <h6>Estudiante #</h6>
            <p>Proyecto:$proyecto</p>
            <p>Matricula:$matricula</p>
          </div>
          <div class="container__items">
            <h6>Estudiante #</h6>
            <p>Proyecto:$proyecto</p>
            <p>Matricula:$matricula</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Modulo4;
