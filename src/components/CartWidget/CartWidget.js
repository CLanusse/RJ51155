import { FaCartPlus } from 'react-icons/fa'
import './CartWidget.scss'

const CartWidget = () => {

    return (
        <div className='cart-widget'>
            <FaCartPlus className='cart-icon'/>
            <span>0</span>
        </div>
    )
}

export default CartWidget