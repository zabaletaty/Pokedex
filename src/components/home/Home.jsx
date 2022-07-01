import React from 'react'
import InputHome from './InputHome'
import "./homeStyle.css"

const Home = ({setValidName}) => {

  const imgPokedex = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7HOEMs-pdHKFIdsM_SJBTA8VdCHrCYb-WrUlnan8etrJ7OLqvojsCrFzvqCl2s5NbBuc&usqp=CAU"

  return (
    <div className='home'>
        <img src={imgPokedex} alt="pokedex" />
        <h2>!Hola entrenador¡</h2>
        <p>Para poder comenzar, dame tu nombre</p>
        <InputHome setValidName={setValidName}/>
    </div>
  )
}

export default Home