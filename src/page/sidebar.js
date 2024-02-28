import React, { useState } from 'react';
import '../css/sidebar.css';

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div className="sidebar-toggle" onClick={toggleSidebar}>
        <div className="menu-icon">☰</div>
        <span className="toggle-label">{isOpen ? " Cerrar" : "Opciones"}</span>
      </div>
      <div className="sidebar-menu">
        <div className="sidebar-option">
          <span className="icon">📝</span>
          <span>Nueva carta</span>
        </div>
        <div className="sidebar-option">
          <span className="icon">📤</span>
          <span>Cartas enviadas</span>
        </div>
        <div className="sidebar-option">
          <span className="icon">📥</span>
          <span>Cartas recibidas</span>
        </div>
        <div className="sidebar-option">
          <span className="icon">📝</span>
          <span>Borradores</span>
        </div>
        <div className="sidebar-option">
          <span className="icon">📄</span>
          <span>Plantillas</span>
        </div>
        <div className="sidebar-option">
          <span className="icon">🔔</span>
          <span>Notificaciones</span>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
