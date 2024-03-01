import React, { useState } from 'react';
import '../css/modulo5.css'; // Importamos el archivo CSS propio
import Sidebar from './sidebar';

function Modulo5() {
  const [minimized, setMinimized] = useState(false);

  const toggleMinimize = () => {
    setMinimized(prevState => !prevState);
  };

  return (
    <div className="container">
      {/* Título y línea superior */}
      <div className="title-bar">
        <p className="welcome-text">Bienvenido, (Docente)!</p>
        <hr className="line" />
        <h1 className="title">Control de Cartas de Alumnos Asesorados</h1>
      </div>

      {/* Contenedor especial con sidebar y formulario */}
      <div className="special-container">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <div className="main-content">
          <div className={`card-container ${minimized ? 'minimized' : ''}`}>
            <div className="card">
              <div className="card-header" onClick={toggleMinimize}>
              <h2 className="main-title">Redactar Carta</h2>
                <div className="card-buttons">
                  {minimized ? (
                    <button className="maximize-button">+</button>
                  ) : (
                    <button className="minimize-button">-</button>
                  )}
                  <button className="close-button">×</button>
                </div>
            
              </div>
              {!minimized && (
                <div className="card-body">
                  <form>
                    <div className="form-group">
                      <label htmlFor="student_name" className="form-label">Alumno</label>
                      <input type="text" id="student_name" name="student_name" className="form-input" placeholder='alumno@utcancun.edu.mx' />
                    </div>
                    <div className="form-group">
                      <label htmlFor="subject" className="form-label">Asunto</label>
                      <input type="text" id="subject" name="subject" className="form-input" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="message" className="form-label">Mensaje</label>
                      <textarea id="message" name="message" rows="6" className="form-textarea" placeholder='Estimado estudiante, Quería expresarte mi agradecimiento por tu dedicación y esfuerzo en el desarrollo de tu proyecto...'></textarea>
                    </div>
                    <div className="form-group">
                      <label htmlFor="attachments" className="form-label">Adjuntar Archivos</label>
                      <input type="file" id="attachments" name="attachments" className="form-file" multiple />
                    </div>
                    <div className="form-footer">
                      <hr className="footer-line" />
                      <div className="form-buttons">
                        <button className="form-icon-button" onClick={() => document.execCommand('underline', false, null)}>A</button>
                        <button className="form-icon-button">Clip</button>
                        <button className="form-button">Guardar como borrador</button>
                        <button className="form-icon-button">🗑️</button>
                      </div>
                      <button type="submit" className="submit-button">Enviar</button>
                    </div>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modulo5;