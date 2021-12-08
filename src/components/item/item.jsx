import { Link } from 'react-router-dom';
//context
import {useCart} from '../../context/cartContext';
//styles
import'./item.css';

const Item = ( {item} ) => {    
    const { id,name,littleDescription,pictureUrl } = item;
    const { getStock } = useCart();
    const stock = getStock(item); 
    
    return(
        <section className='card'>
            <h2>{name}</h2>
            <div className='card__container-img'>
                <img src={pictureUrl} className='image' alt={`imagen de ${name}`}/>
            </div>
            <p>{littleDescription}</p>
            <Link to={`/item/${id}`}>
                <button className='btn'>Ver detalles</button>                
            </Link>             
            <p>Stock disponible: {stock}</p>
        </section>
    )
};
export default Item;