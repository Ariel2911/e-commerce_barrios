import { Link } from 'react-router-dom'
//componets
import ItemCount from '../itemCount/itemCount'
//context
import {useCart} from '../../context/cartContext';
//files
import './itemDetail.css'

let available=5

const ItemDetail = ({item})=>{  
    const{id,name,littleDescription,longDescription,pictureUrl,price,stock}=item 
    const {addItem,getItemStock} = useCart() 

    getItemStock(id)? available=(getItemStock(id).stock) : available=stock    
    
    const onAdd=(quantity)=>{
        
        if(quantity !== 0) {            
            addItem(item,quantity)
        }
    }

    return(
        <article className='item'>
            <h2 className='item__title'> {name} </h2> 
            <div className='item__container'>
                <img className='item__img' src={pictureUrl} alt={littleDescription} />
                <div className='item__textContainer'>
                    <p className='item__descirption'>{longDescription}</p>
                    <p>Precio ${price}</p>
                    <div>
                        <ItemCount stock={available} initial={0} onAdd={onAdd} />
                    </div>
                    <Link to='/cart'>
                        <button className='btn'>Ir al Carrito</button>                
                    </Link> 
                </div>
            </div>
        </article>        
    )
}

export default ItemDetail