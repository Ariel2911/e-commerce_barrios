import { Link } from 'react-router-dom'
//context
import {useCart} from '../../context/cartContext';
//file
import './cart.css';

const Cart =()=>{
    const {cart,removeItem,clear}=useCart()
    
    let acum=0
    if(cart.length === 0){
        return(
            <>
                <p>No hay productos para mostrar</p>
                <Link to={'./'}>
                    <button>Volver al menú principal</button>
                </Link>
            </>
        )
    } 
    return(
        <div className='cart__container'>
            <h1>Detalles de compra</h1>
            <ul className='cart__list-container'>
                <li className='cart__container-item cart__container-item--head'>
                    <span>Imagen</span>
                    <span>Nombre</span>
                    <span>Precio</span>
                    <span>cantidad</span>
                    <span>Total</span>
                    <button className='btn' onClick={clear}>Eliminar todo</button>
                </li>
                {
                    cart?.map(cartItem=>{
                        const {item,quantity}=cartItem
                        
                        acum+=quantity * item.price

                        return(                            
                            <li className='cart__container-item' key={item.id}>
                                <img src={item.pictureUrl} className='cart__image' alt={`imagen de ${item.name} `}/>
                                <span className='cart__item'>{item.name}</span>
                                <span className='cart__item'>{item.price}</span>
                                <span className='cart__item'>{quantity}</span>
                                <span className='cart__item'>{quantity * item.price}</span>
                                <button onClick={()=>removeItem(item.id,quantity)}>Eliminar</button>
                            </li>
                        )
                    })                    
                }
            </ul>
            <p className='cart__total'>Total:  ${acum}</p>    
            <Link to='/reservationForm'>
                <button className='cart__bnt-finish btn'>Terminar la compra</button>                
            </Link>        
        </div>
    )
}

export default Cart