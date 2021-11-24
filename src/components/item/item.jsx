import { Link } from 'react-router-dom'
//context
import {useCart} from '../../context/cartContext';
//styles
import'./item.css'

let available=0

const Item = ({item}) => {
    const {id,name,littleDescription,stock,pictureUrl}=item
    const {getItemStock} = useCart() 

    getItemStock(id)? available=(getItemStock(id).stock) : available=stock
    
    return(
        <section className='card'>
            <h2>{name}</h2>
            <div className='card__container-img'>
                <img src={pictureUrl} className='image' alt={`imagen de ${name} `}/>
            </div>
            <p>{littleDescription}</p>
            <Link to={`/item/${id}`}>
                <button className='btn'>Ver detalles</button>                
            </Link>             
            <p>Stock disponible: {available}</p>
        </section>
    )
}

export default Item