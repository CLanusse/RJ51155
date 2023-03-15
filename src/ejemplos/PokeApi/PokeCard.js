import { useEffect, useState } from "react"



const PokeCard = ( {url} ) => {
    const [pokemon, setPokemon] = useState(null)

    useEffect(() => {
        fetch(url)
            .then((resp) => resp.json())
            .then((data) => {
                setPokemon(data)
            })
    }, [])

    return (
        <div className="col-3 m-2">
            {
                pokemon &&
                    <div>
                        <h4>{pokemon.name}</h4>
                        <img src={pokemon.sprites.front_default}  alt={pokemon.name}/>
                    </div>
            }
        </div>
    )
}

export default PokeCard