import { useState, useEffect } from "react"
import ItemCount from "../itemCount/itemCount"
import ItemList from "../itemList/itemList"
import '../itemListContainer/itemListContainer.css'
import data from '../../objProducts.json'


const ItemListContainer = ({greeting}) => {
    const onAdd = (count,stock,setCount) => {
        console.log("hola")
    }    
    const [productos,setProductos] = useState(null)

    useEffect(() => {
        const getData =  new Promise((resolve,reject) => {
            setTimeout(()=>{
                resolve(data)               
            },2000)            
        })

        getData
            .then((res) => {
            setProductos(res)
            })
            .catch((err) => console.log(err))        
    }, [])   

    return (
        <section className='itemListContainer__container'>
            <p>{greeting}</p>
            <ItemCount stock={3} initial={0} onAdd={onAdd}/>
            <ItemList items={productos}/>
        </section>
    )
}

export default ItemListContainer