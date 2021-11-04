import { useState, useEffect } from "react"
import { useParams } from "react-router"
import ItemDetail from "../itemDetail/itemDetail"
import data from '../../objProducts.json'

const ItemDetailContainer = ()=>{
    const [item,setItem]=useState(null)
    const {id}=useParams()
    console.log(id)
    useEffect(() => {
        const getItem= new Promise((resolve)=>{
            setTimeout(()=>{
                resolve(data)
                
            },2000)
        })

        getItem
            .then(response=>{
                setItem(...response.filter(items=>items.id===id))
            })
    }, [id])    
    
    return(
        item ? <ItemDetail item={item}/>
        : <h2>Loading...</h2> 
    )
}

export default ItemDetailContainer