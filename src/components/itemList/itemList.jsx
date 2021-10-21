import Item from '../item/item'
import './itemList.css'

const ItemList = ({items}) => {
    return(
        <ul>
            {
                items ? items.map((item) =>{
                    return(
                        <li key={item.id}>
                            <Item item={item}/>
                        </li>
                    )
                }) 
                : <h2>Loading...</h2>               
            }
        </ul>
    )
}

export default ItemList