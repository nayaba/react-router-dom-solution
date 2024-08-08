import { useState } from "react"
import { useNavigate } from "react-router-dom"

const PokemonForm = (props) => {

    const [formData, setFormData] = useState({
        name: '',
        weight: '', 
        height: ''
    })

    const navigate = useNavigate()

    const handleChange = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        props.addPokemon(formData)
        navigate('/pokemon')
    }

    return (
        <>
        <h2>New Pokemon</h2>
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange}/>
            <label htmlFor="weight">Weight:</label>
            <input type="text" name="weight"  value={formData.weight} onChange={handleChange}/>
            <label htmlFor="height">Height:</label>
            <input type="text" name="height" value={formData.height} onChange={handleChange}/>
            <button type="submit">Submit</button>
        </form>
        </>
    )
}

export default PokemonForm