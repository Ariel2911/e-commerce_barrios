import ItemCount from "../itemCount/itemCount"
import '../itemListContainer/itemListContainer.css'

const ItemListContainer = ({greeting}) => {
    const onAdd = (count,stock,setCount) => {
        count<stock && setCount(count + 1)
      }
    return (
        <section className='itemListContainer__container'>
            <p>{greeting}</p>
            <ItemCount stock={3} initial={0} onAdd={onAdd}/>
        </section>
    )
}

export default ItemListContainer