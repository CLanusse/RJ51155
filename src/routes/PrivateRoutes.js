import { Navbar } from '../components/Navbar/Navbar';
import ItemListContainer from '../components/ItemListContainer/ItemListContainer';
import Nosotros from '../components/Nosotros/Nosotros';
import ItemDetailContainer from '../components/ItemDetailContainer/ItemDetailContainer';
import Cart from '../components/Cart/Cart';
import { Routes, Route, Navigate } from 'react-router-dom';
import Checkout from '../components/Checkout/Checkout';
import PokeApi from '../ejemplos/PokeApi/PokeApi';


const PrivateRoutes = () => {

    return (
        <>
            <Navbar />
            <Routes>
                <Route path='/' element={ <ItemListContainer /> }/>
                {/* <Route path='/' element={ <PokeApi /> }/> */}
                <Route path='/productos/:categoryId' element={ <ItemListContainer /> }/>
                <Route path='/detail/:itemId' element={ <ItemDetailContainer /> } />
                <Route path='/cart' element={ <Cart /> } />
                <Route path='/checkout' element={ <Checkout /> } />
                <Route path='/nosotros' element={ <Nosotros /> }/>
                <Route path='*' element={ <Navigate to={"/"}/> }/>
            </Routes>
        </>
    )
}

export default PrivateRoutes