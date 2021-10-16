import { useState } from 'react';
import '../itemCount/itemCount.css'

const ItemCount=({ stock, initial, onAdd }) => {

    const [count,setCount]=useState(initial) 

    const Decrease = () => {
      count>0 && setCount(count - 1)
    } 
    const reset = () => {
      setCount(count - count)
    }
    const Increase = ()=> onAdd(count,stock,setCount)
    
    return (
        <>
            <div>
                <button className='count__button' onClick={Decrease}>-</button>
                <span className='count__text'>{count}</span>
                <button className='count__button' onClick={Increase}>+</button>
            </div> 
            <button className='count__button' onClick={reset}>Agregar al carrito </button>       
        </>
    )
}

export default ItemCount