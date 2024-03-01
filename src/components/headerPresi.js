import React from 'react'
import logo from '../img/UT.png'
import user from '../img/user.png'
import 'tailwindcss/tailwind.css';

function HeaderPresi() {
  return (
    <div>
      <header>
        <nav className="bg-[#325B87] px-14 py-5 flex flex-wrap justify-between items-center">
          <div className="flex m-auto">
            <img src={logo} alt="logo-ut" className="w-52 h-14 filter drop-shadow-lg" />
          </div>
          <div className="flex m-auto px-5 mt-2">
            <ul className="flex flex-wrap">
              <li className="px-5 py-1">
                <a className="text-white">Gestión de estadias</a>
              </li>
              <li className="px-5 py-1">
                <a className="text-white">Proyecto</a>
              </li>
              <li className="px-5 py-1">
                <a className="text-white">Asesores</a>
              </li>
              <li className="px-5 py-1">
                <a className="text-white">Estudiantes</a>
              </li>
              <li className="px-5 py-1">
                <a className="text-white">Documentos</a>
              </li>
            </ul>
          </div>
          <div className="flex m-auto mt-2">
            <img src={user} alt="User" className="w-16 h-16" />
          </div>
        </nav>
      </header>
    </div>
  )
}

export default HeaderPresi
