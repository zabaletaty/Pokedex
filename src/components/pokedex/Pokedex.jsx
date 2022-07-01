import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux'
import axios from "axios"
import "./pokedex.css"
import PokeCard from './PokeCard';
import Pagination from './Pagination';

const Pokedex = () => {

  const nameUser = useSelector(state => state.userName)
  const [pokemons, setPokemons] = useState()
  const [searchValue, setSearchValue] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const [typePokemon, setTypePokemon] = useState("all")
  const [allTypes, setAllTypes] = useState()
  const [types, setTypes] = useState()

 
  

  let searchPokemons = [];
  let arrayType = []
  let url = ""
  
  const buscandotype = (array)=>{
    url = array[0]?.url
  }

  if(typePokemon === "all"){
    searchPokemons = pokemons?.filter(pokemon => {
      const pokemonName = pokemon?.name.toLowerCase()
      const searchPokemon  = searchValue.toLowerCase()
      
      return pokemonName.includes(searchPokemon);
    })
  }else{

    arrayType = allTypes.filter(pokemon => {
      const pokemonName = pokemon?.name
      const searchPokemon  = typePokemon
      
      return pokemonName.includes(searchPokemon);
    })

    buscandotype(arrayType)

    searchPokemons = types?.filter(poke => {
      const pokemonName = poke?.pokemon.name
      const searchPokemon  = searchValue
      
      return pokemonName.includes(searchPokemon);
    })



  }

  console.log(url);
  console.log(arrayType);
  console.log(allTypes);
  console.log(searchPokemons);
  

  let arrayPokemons = [];
  const pokemonsPage = 12;

  if(searchPokemons?.length < pokemonsPage){
    arrayPokemons = [...searchPokemons]
  }else{
    const lastPokemons = currentPage * pokemonsPage 
    arrayPokemons = searchPokemons?.slice(lastPokemons - pokemonsPage, lastPokemons)
  }

  let arrayPages = []
  let quantityPages = Math.ceil(searchPokemons?.length / pokemonsPage)
  const pagesPerBlock = 5
  let currentBlock = Math.ceil(currentPage / pagesPerBlock)
  if(currentBlock * pagesPerBlock >= quantityPages){
    for(let i = currentBlock * pagesPerBlock - pagesPerBlock + 1; i <= quantityPages ;i++) {
      arrayPages.push(i)
    }
  } else {
    for(let i = currentBlock * pagesPerBlock - pagesPerBlock + 1; i <= currentBlock * pagesPerBlock;i++){
      arrayPages.push(i)
    }
  }

  
  
  const getApi = () => {
    const URL_POKEMONS = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1154'
    axios.get(URL_POKEMONS)
    .then(res => setPokemons(res.data.results))
    .catch(err => console.log(err))
  }

  
  

  const getApiTypes = () => {
    const URL_TYPES = 'https://pokeapi.co/api/v2/type/'
    axios.get(URL_TYPES)
    .then(res => (setAllTypes(res.data.results)))
    .catch(err => console.log(err))
  }
  
  const getUrl = (url) =>{
    axios.get(url)
    .then(res => {
        setTypes(res.data.pokemon)
    })
  }

  console.log(types);

  useEffect(() => {
    getApi()
    getApiTypes()
    if(url != ""){
      getUrl(url)
    }
  }, [typePokemon])


  const onSerachValueChange = (e) =>{
    setSearchValue(e.target.value)
  }

  const typePokemons = (e) =>{
    setTypePokemon(e.target.value)
  }
  

  return (
    <>
    <header className='header'>
      <div className='header-2'></div>
    </header>
    <h1 className='title'>Bienvenido {nameUser}, aqui podras encontrar tu pokemos favorito</h1>
      <input 
        placeholder='Escribe el pokemon que buscas'
        value={searchValue}
        onChange={onSerachValueChange}
        className="input"
      />
      
      <select name="types" className="input width-select" value={typePokemon} onChange={typePokemons}>
        <option selected value="all">Todos</option>
        {
          allTypes?.map(type => (
            <option value={type.mane}>{type.name}</option>
          ))
        }
      </select>

      {/* <button className='setting'>Setting</button> */}

      <h2 className='nameType'>{typePokemon}</h2>
    
      <Pagination
        arrayPages={arrayPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        quantityPages={quantityPages}
      />
    
    <section className='cards_pokemon'>
      {
        typePokemon === "all" 
        ?
        arrayPokemons?.map(pokemon => (
          <PokeCard 
            key={pokemon.url}
            url={pokemon.url}
          />
        ))
        :
        arrayPokemons?.map(poke => (
          <PokeCard 
            key={poke.pokemon.url}
            url={poke.pokemon.url}
          />
        ))
      } 
    </section>
    </>
  )
}

export default Pokedex