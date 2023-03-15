import { useEffect, useState } from 'react'
import { pedirDatos } from '../../helpers/pedirDatos'
import ItemList from '../ItemList/ItemList'
import './ItemListContainer.css'

//   protocolo |    dominio     | endpoints | ?parámetros
// URL: https://www.coderhouse.com/tutores

// GET: https://www.coderhouse.com/notas 
// id: number (required) número de comisión
// limit: number (optional)

// query params
//  https://www.coderhouse.com/notas?limit=20&id=42166

// URL PARAMS
// GET: https://www.coderhouse.com/alumnos/{id}/{curso}
// GET: https://www.coderhouse.com/alumnos/123456/javascript
// GET: https://www.coderhouse.com/alumnos/66554/reactjs

// fetch(url)


const ItemListContainer = () => {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)

        pedirDatos()
            .then((res) => {
                setProductos(res)
            })
            .catch((error) => {
                console.log(error)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [])

    return (
        <div className="container my-5">

            {
                loading
                    ? <h2>Cargando...</h2>
                    : <ItemList items={productos}/>
            }
        </div>
    )
}

export default ItemListContainer