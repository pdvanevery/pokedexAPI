import './App.css'
import { useState } from 'react'
import Axios from 'axios'

function App() {
  const [pokemonName, setPokemonName] = useState('')
  const [pokemonChosen, setPokemonChosen] = useState(false)
  const [pokemon, setPokemon] = useState({
    name: '',
    species: '',
    img: '',
    hp: '',
    attack: '',
    defense: '',
    special_attack: '',
    special_defense: '',
    speed: '',
    type: '',
    ability: '',
    ability2: '',
  })

  

  const searchPokemon = () => {
    Axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`).then((response) => {
      setPokemon({
        name: pokemonName,
        species: response.data.species.name,
        img: response.data.sprites.front_default,
        img2: response.data.sprites.front_shiny, 
        hp: response.data.stats[0].base_stat,
        attack: response.data.stats[1].base_stat,
        defense: response.data.stats[2].base_stat,
        special_attack: response.data.stats[3].base_stat,
        special_defense: response.data.stats[4].base_stat,
        speed: response.data.stats[5].base_stat,
        type: response.data.types[0].type.name,
        ability: response.data.abilities[0].ability.name,
        // ability2: response.data.abilities[1].ability.name,
      })
      setPokemonChosen(true)
    })
  }

  
  return (
    <div className='App'>
      <div className='Title'>
        <h1>Pokemon Stats</h1>
        <input type='text' onChange={(event) => {setPokemonName(event.target.value)}} />
        <button onClick={searchPokemon}>Search Pokemon</button>
      </div>
      <div className='Display'>
        {!pokemonChosen ? (
        <h1> Please choose a Pokemon</h1>) : (
        <>
        <h1>{pokemon.species}</h1>
        <div className='PokemonImage'>
        <img src={pokemon.img} />
        <img src={pokemon.img2} />
        </div>
          <h3>Type: {pokemon.type}</h3>
          <h3>Abilities: {pokemon.ability}</h3>
          <h4>HP: {pokemon.hp}</h4>
          <h4>Attack: {pokemon.attack}</h4>
          <h4>Defense: {pokemon.defense}</h4>
          <h4>Special Attack: {pokemon.special_attack}</h4>
          <h4>Special Defense: {pokemon.special_defense}</h4>
          <h4>Speed: {pokemon.speed}</h4>
        </>
        )}
       
      </div>
      
    </div>
  )
}

export default App