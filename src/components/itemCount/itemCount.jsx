import { useState } from 'react';
//files
import './itemCount.css';

const ItemCount=({ stock, initial, onAdd }) => {
  
  const [count,setCount]=useState(stock ? initial:0);
  const [availableStock,setAvailableStock]=useState(stock-count);
  
  const Decrease = () => {
    if(count>0){
      setCount(count - 1);
      setAvailableStock(availableStock+1);
    };      
  };     
  const addCart = () => {   
    
    if(availableStock>=0 && count >0 && stock>0){
      onAdd(count);
      if(count===stock){
        setCount(0);
        setAvailableStock(0);        
      }else{
        setCount(initial);
        setAvailableStock(stock-count-initial);
      };
    }; 
    if(availableStock===0 && count===1){
      setCount(0);      
    };
  };
  const Increase = ()=> {
    if(availableStock>0){
      setCount(count + 1);
      setAvailableStock(availableStock-1);
    };  
  };  
  return (
    <article className='count'>
            <div>
                <button className='count__button' onClick={Decrease}>-</button>
                <span className='count__number'>{count}</span>
                <button className='count__button' onClick={Increase}>+</button>
            </div> 
            <button className='count__buttonAdd' onClick={addCart}>Agregar </button>  
            <p >Stock didponible: {availableStock<0 ? availableStock-initial : availableStock}</p>      
        </article>
    )
};
export default ItemCount;