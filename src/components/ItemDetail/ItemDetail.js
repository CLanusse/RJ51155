import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../../context/CartContext"
import ItemCount from "../ItemCount/ItemCount"
// import Select from "../Select/Select"

// const talles = [
//     {
//         value: 'estra-small',
//         label: 'XS'
//     },
//     {
//         value: 'small',
//         label: 'S'
//     },
//     {
//         value: 'medium',
//         label: 'M'
//     },
//     {
//         value: 'large',
//         label: 'L'
//     },
//     {
//         value: 'extra-large',
//         label: 'XL'
//     },
// ]
// const [talle, setTalle] = useState(talles[0].value)

const ItemDetail = ({item}) => {
    const { agregarAlCarrito, isInCart } = useContext(CartContext)

    const [cantidad, setCantidad] = useState(1)

    const handleAgregar = () => {
        const newItem = {
            ...item,
            cantidad
        }

        agregarAlCarrito(newItem)
    }

    return (
        <div>
            <h2>{item.name}</h2>
            <hr/>
            <img src={item.img} alt={item.name}/>
            <p>{item.description}</p>
            <p>Precio: ${item.price}</p>

            {
                isInCart(item.id)
                ?   <Link to="/cart" className="btn btn-success">Terminar mi compra</Link>
                :   <ItemCount 
                        max={item.stock}
                        cantidad={cantidad}
                        setCantidad={setCantidad}
                        agregar={handleAgregar}
                    />
            }



        </div>
    )
}

export default ItemDetail