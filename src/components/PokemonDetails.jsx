import { useParams } from 'react-router-dom'

const PokemonDetails = props => {
  const { pokemonId } = useParams()

  const singlePokemon = props.pokemon.find(poke => {
    return poke._id === Number(pokemonId)
  })

  return (
    <>
      <h2>{singlePokemon.name}</h2>
      <p>Weight: {singlePokemon.weight}</p>
      <p>Height: {singlePokemon.height}</p>
    </>
  )
}

export default PokemonDetails
