"use client";
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import "../assets/global.css"; // Importamos los estilos

export default function Page1() {
  const [color, setColor] = useState("#cccccc"); // Color inicial (gris)

  return (
    <>
      <Navbar links={[{ label: "Home", href: "/" }, { label: "Page 1", href: "/page1" }]} />
      <div className="page-container">
        <div className="rectangle" style={{ backgroundColor: color }}></div>
        <div className="button-grid">
          <button onClick={() => setColor("#ff0000")} className="color-btn red">Rojo</button>
          <button onClick={() => setColor("#008000")} className="color-btn green">Verde</button>
          <button onClick={() => setColor("#0000ff")} className="color-btn blue">Azul</button>
          <button onClick={() => setColor("#ffff00")} className="color-btn yellow">Amarillo</button>
        </div>
      </div>
    </>
  );
}
