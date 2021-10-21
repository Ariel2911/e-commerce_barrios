import'../item/item.css'

const Item = ({item}) => {
    const {name,description,stock,pictureUrl}=item
    
    return(
        <section className='card'>
            <h2>{name}</h2>
            <img src={pictureUrl} className='image' alt="foto de insecto" />
            <p>{description}</p>
            <button>Ver detalles de producto</button>
            <p>Stock disponible: {stock}</p>
        </section>
    )
}

export default Item