import { Link } from "react-router-dom"

const PokemonList = (props) => {
    return (
        <>
        <h2>Pokemon List</h2>
        <ul>
            {props.pokemon.map((currentPokemon) => {
                return <li>
                 <Link to={`/pokemon/${currentPokemon._id}`}>{currentPokemon.name}</Link> 
                    </li>
            })}
        </ul>
        </>
    )
}

export default PokemonList