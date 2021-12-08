import { Link } from 'react-router-dom';
//componets
import ItemCount from '../itemCount/itemCount';
//context
import {useCart} from '../../context/cartContext';
//files
import './itemDetail.css';

const ItemDetail = ({item})=>{  
    const{ name,littleDescription,longDescription,pictureUrl,price }=item;
    const { addItem,getStock } = useCart(); 
    const stock = getStock(item);
      
    const onAdd=(quantity)=>{        
        if(quantity !== 0) {            
            addItem(item,quantity);
        };
    };
    return(
        <div className='itemDelail-container'>
            <article className='item card'>
                <h2 className='item__title'> {name} </h2> 
                <div className='item__container'>
                    <img className='item__img' src={pictureUrl} alt={littleDescription} />
                    <div className='item__text-container'>
                        <p className='item__descirption'>{longDescription}</p>
                        <p>Precio ${price}</p>
                        <div>
                            <ItemCount stock={stock} initial={1} onAdd={onAdd} />
                        </div>
                        <Link to='/cart'>
                            <button className='btn'>Ir al Carrito</button>                
                        </Link> 
                    </div>
                </div>
            </article>   
        </div>
    )
};
export default ItemDetail;