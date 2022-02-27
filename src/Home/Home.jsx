import React from "react";
import flor from "../Componentes/Flor";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Home() {
  return (
    <section id="galeria" className="container">
      <div className="text-center pt-5">
        <h1>Tienda de Flores</h1>
      </div>
      <div className="row">
        <h3 className="text-start pt-5 pb-3">New</h3>
        <div className="col-lg-3 text-center">{flor(0,0)}</div>
        <div className="col-lg-3 text-center">{flor(1,1)}</div>
        <div className="col-lg-3 text-center">{flor(2,2)}</div>
        <div className="col-lg-3 text-center">{flor(3,3)}</div>
      </div>
      <div className="row">
        <h3 className="text-start pt-5 pb-3">Relevant</h3>
        <div className="col-lg-3 text-center">{flor(4,4)}</div>
        <div className="col-lg-3 text-center">{flor(5,5)}</div>
        <div className="col-lg-3 text-center">{flor(6,6)}</div>
        <div className="col-lg-3 text-center">{flor(7,7)}</div>
      </div>
      
    </section>
  );
}
