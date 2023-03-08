import './ItemListContainer.css'

const ItemListContainer = ( {greeting} ) => {

    return (
        <div className="container my-5">
            <h2 className="list-container__title">ItemListContainer</h2>
            <hr/>

            <p>{greeting}</p>
        </div>
    )
}

export default ItemListContainer