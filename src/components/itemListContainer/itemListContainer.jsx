import { useState, useEffect } from "react"
import { useParams } from "react-router"
import ItemList from "../itemList/itemList"
import '../itemListContainer/itemListContainer.css'
import data from '../../objProducts.json'

const ItemListContainer = ({greeting}) => {
    const {id}=useParams()
    
    const [productos,setProductos] = useState(null)
    const [category,setcategory] = useState(null)  
    const [loading,setloading] = useState(true)  

    if(category != id){
        setcategory(id)
        setloading(true)
    }

    useEffect(() => {
        setloading(true)
        const getData =  new Promise((resolve,reject) => {            
            setTimeout(()=>{
                setloading(false)
                resolve(data)               
            },2000)               
        })

        getData
            .then((res) => {                
                if(category){
                    setProductos(res.filter(e=> e.tag==id))
                }
                else setProductos(res)                
            })
            .catch((err) => console.log(err))              
    }, [id])  

    if(loading){
        return <h2>Loding...</h2>
    }

    return(
        <section className='itemListContainer__container'>
            <h2>{greeting}</h2>
            <ItemList items={productos}/>
        </section>
    ) 
}

export default ItemListContainer