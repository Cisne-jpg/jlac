"use client";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import "./assets/global.css";

export default function HomePage() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState(""); // Estado para el mensaje

  const handleIncrement = () => {
    setCount(count + 1);
    setMessage(""); // Limpiar mensaje
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
      setMessage(""); // Limpiar mensaje si se decrementa correctamente
    } else {
      setMessage("No es posible reducir más el contador.");
    }
  };

  return (
    <>
      <Navbar links={[{ label: "Home", href: "/" }, { label: "Page 1", href: "/page1" }]} />
      <div className="container"> {/* Ahora solo envuelve el contador */}
        <div className="contador">
          <h1 className="cero">{count}</h1> {/* Contador grande en el centro */}
          {message && <p className="error-message">{message}</p>} {/* Mensaje de error */}
          <div className="button-group">
            <button onClick={handleIncrement} className="cont">Sumar</button>
            <button onClick={handleDecrement} className="cont">Restar</button>
          </div>
        </div>
      </div>
    </>
  );
}
