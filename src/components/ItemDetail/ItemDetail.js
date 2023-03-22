import { useState } from "react"
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

const ItemDetail = ({item}) => {
    const [cantidad, setCantidad] = useState(1)
    // const [talle, setTalle] = useState(talles[0].value)

    const handleAgregar = () => {
        const newItem = {
            ...item,
            cantidad
        }

        console.log(newItem)
    }

    return (
        <div>
            <h2>{item.name}</h2>
            <hr/>
            <img src={item.img} alt={item.name}/>
            <p>{item.description}</p>
            <p>Precio: ${item.price}</p>

            {/* <Select 
                set={setTalle}
                options={talles}
            /> */}

            <ItemCount 
                max={item.stock}
                cantidad={cantidad}
                setCantidad={setCantidad}
                agregar={handleAgregar}
            />


        </div>
    )
}

export default ItemDetail