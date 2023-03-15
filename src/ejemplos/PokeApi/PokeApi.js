import { useEffect, useState } from "react"


const PokeApi = () => {
    const [pokemon, setPokemon] = useState(null)
    const [id, setId] = useState(1)

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then((res) => res.json() )
            .then((data) => {
                setPokemon(data)
            })
            .catch((error) => {
                console.log(error)
            })

    }, [id])

    const handleSiguiente = () => {
        setId(id + 1)
    }

    const handleAnterior = () => {
        id > 1 && setId(id - 1)
    }

    return (
        <div className="container my-5">
            <h2>PokeApi</h2>
            <hr/>

            {
                pokemon &&
                    <div>
                        <h4>{pokemon.name}</h4>
                        <img src={pokemon.sprites.front_default}  alt={pokemon.name}/>
                    </div>
            }

            <button onClick={handleAnterior} className="btn btn-outline-primary">Anterior</button>
            <button onClick={handleSiguiente} className="btn btn-primary mx-2">Siguiente</button>

        </div>
    )
}

export default PokeApi