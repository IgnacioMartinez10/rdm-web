import React from 'react'
import "../assets/css/InfoHome.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMugHot, faStore, faTruckFast,} from '@fortawesome/free-solid-svg-icons'
import whatsapp from "../assets/statics/whatsapp.svg"

export default function InfoHome() {
  return (
    <div className='infoHome'>
        <div className="infoContent">
        <FontAwesomeIcon icon={faMugHot}/>
            <h2>Tazas Personalizadas</h2>
            <p>Contanos tu idea y nosotros te la hacemos !</p>
        </div>
        <div className="infoContent">
        <FontAwesomeIcon icon={faStore}/>
            <h2>Tienda Online</h2>
            <p>Comprá desde tu casa que nosotros te lo enviamos</p>
        </div>
        <div className="infoContent">
        <FontAwesomeIcon icon={faTruckFast}/>
            <h2>Envios a todo el país</h2>
            <p>Tenemos punto de retiro en Mataderos, CABA</p>
        </div>
        <div className="infoContent">
        <img src={whatsapp} width="30px" alt="" />
            <h2>WhatsApp</h2>
            <p>Te podes comunicar con nosotros por cualquier duda que tengas ! </p>
        </div>

    </div>
  )
}
