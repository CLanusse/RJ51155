

const ItemCount = ({stock, cantidad, setCantidad, agregar}) => {

    const handleRestar = () => {
        cantidad > 1 && setCantidad(cantidad - 1)
    }

    const handleSumar = () => {
        cantidad < stock && setCantidad(cantidad + 1)
    }



    return (
        <div>
            <button 
                onClick={handleRestar} 
                className={`btn 
                ${cantidad === 1 ? 'minimo' : ''} 
                ${cantidad === 1 ? 'btn-outline-danger' : 'btn-outline-primary'}`}
                disabled={cantidad === 1 || stock === 0}
            >
                -
            </button>

            <span className="mx-3">{cantidad}</span>

            <button 
                onClick={handleSumar} 
                className={cantidad === stock ? "btn btn-danger" : "btn btn-primary"}
                disabled={cantidad === stock || stock === 0}
            >
                +
            </button>

            <br/>

            <button disabled={stock === 0} onClick={agregar} className="btn btn-success">Agregar al carrito</button>
        </div>
    )
}

export default ItemCount