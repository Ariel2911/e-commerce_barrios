import { Link } from 'react-router-dom'
import'../item/item.css'

const Item = ({item}) => {
    const {id,name,description,stock,pictureUrl}=item
    
    return(
        <section className='card'>
            <h2>{name}</h2>
            <div className='card__container-img'>
                <img src={pictureUrl} className='image' alt={`imagen de ${name} `}/>
            </div>
            <p>{description}</p>
            <Link to={`/item/${id}`}>
                <button>Ver detalles de producto</button>                
            </Link> 
            <p>Stock disponible: {stock}</p>
        </section>
    )
}

export default Item