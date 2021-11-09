import { useState } from 'react/cjs/react.development'
import ItemCount from '../itemCount/itemCount'
import './itemDetail.css'

const ItemDetail = ({item})=>{
    const[add,setAdd]=useState(0)
    const onAdd=(value)=>{
        setAdd(value)
    }
    
    return(
        <article className='item'>
            <h2 className='item__title'> {item.name} </h2> 
            <div className='item__container'>
                <img whidth={1000} className='item__img' src={item.pictureUrl} alt={item.description} />
                <div className='item__textContainer'>
                    <p className='item__descirption'>{item.largeDescription}</p>

                    <p>Precio ${item.price}</p>
                    <div>
                        <ItemCount stock={item.stock} initial={0} onAdd={onAdd} />
                    </div>

                </div>
            </div>
        </article>
        
    )
}

export default ItemDetail