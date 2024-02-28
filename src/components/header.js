import React from 'react'
import logo from '../img/UT.png'
import user from '../img/user.png'

function Header() {
  return (
    <div>
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
    </div>
  )
}

export default Header
