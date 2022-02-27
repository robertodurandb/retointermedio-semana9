import React from 'react'
import Imagenes from '../Assets/Imagenes'
import '../Componentes/Flor.css'

export default function flor(numImg, nameImg) {
  return (
      <div className='contenedor'>
        <img src={Imagenes[numImg].img}/>
        <h5>{Imagenes[nameImg].name}</h5>
      </div>
  )
}
