import { useState } from 'react';
import { Link } from 'react-router-dom';
//context
import {useCart} from '../../context/cartContext';
//componnents
import ReservationForm from '../reservationForm/reservationForm';
//style
import './cart.css';

const Cart =()=>{
    const { cart,removeItem,clear,totalToPay }=useCart();

    const [enterData,setEnterData] = useState('deactivateForm');
    const [ idOrder,setIdOrder] = useState(null);
    const [btnFinish, sertBtnFinish] = useState('activeForm')

    const fun = (data)=> setIdOrder(data);
    const handleForm = ()=>{
        setEnterData('activeForm');
        sertBtnFinish('deactivateForm')
    };
    if(cart.length === 0){
        return(
            <div className='cart__container'>
                <p className='title'>{ idOrder ? 'Código de compra:' : '¡Ups! Tu carrito esta vacío'}</p>   
                {idOrder && <p className='cart__message'>{idOrder}</p>}                
                <Link to={'./'}>
                    <button className='btn'>Volver al menú principal</button>
                </Link>
            </div>
        )
    };
    return(
        <div className='cart__container'>
            <div className='cart__header'>
                <h2 className='title'>Mi carrito</h2>
                <button className='btn' onClick={clear}>Vaciar</button>
            </div>
            
            <ul className='cart__list-container'>
                {cart.map(cartItem=>{
                    const {item,quantity}=cartItem; 
                    return(                            
                        <li className='cart__container-item card' key={item.id}>
                            <img src={item.pictureUrl} className='cart__item cart__image' alt={`imagen de ${item.name} `}/>                            
                            <span className='cart__item'>{item.name}</span>
                            <button className='cart__item cart__item-remove' onClick={()=>removeItem(item.id,quantity)}>X</button>
                            <span className='cart__item'> Cant: {quantity}</span>
                            <span className='cart__item'>$  {item.price}</span>
                            <span className='cart__item'>$ {quantity * item.price}</span>                            
                            
                        </li>
                    )
                })}
            </ul>
            <p className='cart__total'>Total: <span>$ {totalToPay()}</span></p> 

            <button onClick={handleForm} className={`btn cart__bnt-finish ${btnFinish}`}>Terminar la compra</button>  

            <ReservationForm enterData={enterData} fun={fun}/>
        </div>
    )
};
export default Cart;