import './ItemListContainer.css'
import { Button } from 'react-bootstrap'


const ItemListContainer = ( {greeting} ) => {

    return (
        <div className="container my-5">
            <h2 className="list-container__title">ItemListContainer</h2>
            <hr/>

            <p>{greeting}</p>

          {/* <button className='btn btn-danger'>Click me</button> */}

          <Button variant='dark'>Click me</Button>
          <Button variant='light' size='sm'>Click me</Button>
        </div>
    )
}

export default ItemListContainer