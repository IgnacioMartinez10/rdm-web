import React from 'react'
import "../assets/css/Hero.css";
import logo from "../assets/statics/RDM.png"

export default function Hero() {
  return (
    <>
      <div className="hero">
        <img src={logo} alt="wrapper" width={400}/>
        <div className="heroInfo">
          <h2>¿Todavía no conoces nuestra tienda?</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, consequatur!</p>
          <button>Conocé nuestra tienda!</button>
        </div>
      </div>

    </>
    
  )
}
