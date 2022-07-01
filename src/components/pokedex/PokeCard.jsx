import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "./pokedex.css"

const PokeCard = ({url}) => {

  const [pokemon, setPokemon] = useState()

  useEffect(() => {
    axios.get(url)
      .then(res => setPokemon(res.data))
      .catch(err => console.log(err))
  }, [])

  
  const navigate = useNavigate()
  
  const clickCard = () => navigate(`/pokedex/${pokemon.id}`)
  
  const styles = "card_pokemon" + " " + pokemon?.types[0].type.name


  return (
    <article onClick={clickCard} className={styles}>
      <div className='card_card'>
        <img src={pokemon?.sprites.other['official-artwork'].front_default} alt={pokemon?.name} />
        <h3>{pokemon?.name}</h3>
        <h4>{pokemon?.types[0].type.name}</h4>
        <div className='flex_statistics'>
          <p><span className='color_gray'>Hp</span><br/>{pokemon?.stats[0].base_stat}</p>
          <p><span className='color_gray'>Attack</span><br/>{pokemon?.stats[1].base_stat}</p>
        </div>
        <div className='flex_statistics'>
          <p><span className='color_gray'>Def</span><br/>{pokemon?.stats[2].base_stat}</p>
          <p><span className='color_gray'>Speed</span><br/>{pokemon?.stats[5].base_stat}</p>
        </div>
      </div>
    </article>
  )
}

export default PokeCard