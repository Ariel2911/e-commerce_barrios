import { useState } from 'react';
//files
import './itemCount.css'

const ItemCount=({ stock, initial, onAdd }) => {

    const [count,setCount]=useState(initial) 
    const [available,setAvailible]=useState(stock)

    const Decrease = () => {
      if(count>0){
        setCount(count - 1)
        setAvailible(available+1)
      }      
    } 
    
    const addCart = () => {      
      onAdd(count)
      setCount(0)
    }

    const Increase = ()=> {
      if(available>0){
        setCount(count + 1)
        setAvailible(available-1)
      }  
    }

    return (
        <article className='count'>
            <div>
                <button className='count__button' onClick={Decrease}>-</button>
                <span className='count__number'>{count}</span>
                <button className='count__button' onClick={Increase}>+</button>
            </div> 
            <button className='count__button' onClick={addCart}>Agregar al carrito </button>  
            <p >Stock: {available}</p>      
        </article>
    )
}

export default ItemCount