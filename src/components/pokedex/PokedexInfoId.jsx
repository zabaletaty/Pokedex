import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import "./pokedexinfo.css"

const PokedexInfoId = () => {

    const {id} = useParams()
    const [pokemon, setPokemon] = useState()

    const getPokemonId = (id) =>{
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
            .then(res => setPokemon(res.data))
            .catch(err => console.log(err))
    }

    console.log(pokemon);

    useEffect(() => {
      getPokemonId(id)
    }, [])

    console.log(pokemon);
    console.log(pokemon?.abilities);

    const styles =  pokemon?.types[0].type.name
    

  return (
    <section className='pokedesInfo'>
    <div className="card-father">
        <article className={'pokemonId' + " " + pokemon?.types[0].type.name + "-B"}>
            <img src={pokemon?.sprites.other['official-artwork'].front_default} alt="" />
            <div className='flex weight-height'>
                <p>{pokemon?.weight}<br/>Weight</p>
                <p>{pokemon?.height}<br/>Height</p>
            </div>
            <h2>{pokemon?.name}</h2>
            <h3>#{pokemon?.id}</h3>
        </article>
        <div className="flex">
            <article className={'type' + " " + pokemon?.types[0].type.name + "-B"}>
                <h2>Type</h2>
                    {
                        pokemon?.types[1] 
                        ? 
                        <div className='cards'>
                            <div className='card-1'>
                                <p>{pokemon?.types[0].type.name}</p>
                            </div>
                            <div className='card-2'>
                                <p>{pokemon?.types[1] ? pokemon?.types[1].type.name : "null"}</p>
                            </div>
                        </div>
                        :
                        <div className='cards center'>
                            <div className='card-1'>
                                <p>{pokemon?.types[0].type.name}</p>
                            </div>
                        </div>
                    }
                    
            </article>
            <article className={'abilities' + " " + pokemon?.types[0].type.name + "-B"}>
                <h2>Abilities</h2>
                <div className='cards'>
                    <div className='card-1 color-white'>
                        <p>{pokemon?.abilities[0].ability.name}</p>
                    </div>
                    <div className='card-1 color-white'>
                        <p>{pokemon?.abilities[1].ability.name}</p>
                    </div>
                </div>
            </article>
        </div>
    </div>
    <article className={'movements' + " " + pokemon?.types[0].type.name + "-B"}>
        <h2>Movements</h2>

        {
            pokemon?.moves.map(movement => (
                <div className='cards-moves cente margin '>
                    <div className='card-move'>
                        <p>{movement.move.name}</p>
                    </div>
                </div>
            ))
        }
           
    </article>
    </section>
  )
}

export default PokedexInfoId