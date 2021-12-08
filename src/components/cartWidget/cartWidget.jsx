import { Link } from 'react-router-dom';
//context
import {useCart} from '../../context/cartContext';
//files
import cartWidget from './05carrito.svg';
import './cartWidget.css';

const CartWidget = () =>{
    const {quantityCart}=useCart();  

    return(
        <Link to={'/cart'}>
            <div className='cartWidget__container'>
                <img src={cartWidget} className='cartWidget__icon' alt="carrito de compras" />
                <span className='cartWidget__number'>{quantityCart}</span>
            </div>
        </Link>
    )
};
export default CartWidget;