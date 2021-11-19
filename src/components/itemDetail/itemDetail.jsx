import { Link } from 'react-router-dom'
//componets
import ItemCount from '../itemCount/itemCount'
import {useCart} from '../../context/cartContext';
//files
import './itemDetail.css'

const ItemDetail = ({item})=>{ 
    const{name,littleDescription,longDescription,pictureUrl,price}=item  
    const {addItem} = useCart()  

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
                        <ItemCount stock={item.stock} initial={0} onAdd={onAdd} />
                    </div>
                    <Link to='/cart'>
                        <button className='item__button-finished'>Terminar mi compra</button>                
                    </Link> 
                </div>
            </div>
        </article>        
    )
}

export default ItemDetail