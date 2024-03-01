import React from 'react';
import logo from '../img/UT.png';
import user from '../img/user.png';
import projectImage from '../img/project.png';
import Header from '../components/header';

function Modulo7() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header/>
      <div className="flex-grow">
        <div className="border-t-4 border-black text-center p-5">
          <h1 className="text-2xl">Información del proyecto</h1>
        </div>
        <div className="flex justify-evenly items-start p-6">
          <div className="w-full max-w-lg">
            <div className="flex flex-col items-center mb-6">
              <img src={projectImage} alt="Project" className="w-full max-w-md mb-4" />
              <button className="bg-blue-800 text-white px-6 py-2 rounded shadow hover:bg-blue-700 transition duration-300">
                Visualizar Proyecto
              </button>
            </div>
          </div>
          <div className="flex flex-col w-full max-w-lg gap-4">
            <div className="bg-gray-200 p-4 text-center rounded shadow">
              <h2 className="text-blue-800 text-lg">Asesor Académico</h2>
              <p>Rafael Villegas</p>
              <p className="text-red-600">rvillegas@utcancun.edu.mx</p>
            </div>
            <div className="bg-gray-200 p-4 text-center rounded shadow">
              <h2 className="text-blue-800 text-lg">Estatus del proyecto</h2>
              <p>Comentarios: <span className="text-red-600">2</span></p>
              <p>Votos: <span className="text-green-600">3</span></p>
              <button className="bg-red-500 text-white px-4 py-2 rounded-full shadow-lg flex items-center justify-center mx-auto">
                <span className="text-lg mr-2">❤️</span> Votar
              </button>
            </div>
            <div className="bg-gray-200 p-4 w-full text-center rounded shadow">
              <h2 className="text-blue-800 text-lg">Comentarios:</h2>
              <p>El documento presentado no tiene ningún aspecto que se tenga que corroborar ya que abarco todos los requerimientos que se tienen que cumplir y tiene <span className="text-green-600">3</span> votos a favor y eso da autorización al siguiente paso.</p>
              <button className="mt-4 bg-blue-800 text-white px-5 py-2 rounded shadow">Comentar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modulo7;
