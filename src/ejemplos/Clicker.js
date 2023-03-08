import { useState, useEffect } from "react"


const Clicker = () => {
    const [counter, setCounter] = useState(0)
    const [saludo, setSaludo] = useState("Hola mundo")

    const sumarClick = () => {
        setCounter( counter + 1 )
    }

    const restarClick = () => {
        setCounter( counter - 1 )
    }

    const handleSaludo = () => {
        if (saludo === "Hola mundo") {
            setSaludo("Chau mundo")
        } else {
            setSaludo("Hola mundo")
        }
    }

    useEffect(() => {
        // efecto de montaje
        console.log("MONTAJE")

        return () => {
            console.log("DESMONTAJE")
        }
    }, [])

    useEffect(() => {
        // efecto
        console.log("Efecto de actualizacion counter")
        // localStorage.setItem('counter', counter)
        return () => {
            console.log("Efecto desmontaje counter")
        }
    }, [counter])

    

    return (
        <div className="container my-5">
            <h2>Clicker</h2>
            <hr/>
            <p>Clicks: {counter}</p>
            <p>FyH: { new Date().toLocaleString() }</p>

            <button onClick={sumarClick} className="btn btn-primary">Sumar</button>
            <button onClick={restarClick} className="btn btn-primary">Restar</button>

            <hr/>
            <p>{saludo}</p>
            <button onClick={handleSaludo} className="btn btn-primary">Cambiar saludo</button>

        </div>
    )
}

export default Clicker