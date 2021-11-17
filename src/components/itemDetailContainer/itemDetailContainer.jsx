import { useState, useEffect } from "react"
import { useParams } from "react-router"
//components
import ItemDetail from "../itemDetail/itemDetail"
import Loading from "../loading/loading"
//files
import data from '../../objProducts.json'

const ItemDetailContainer = ()=>{
    const [item,setItem]=useState(null)
    const {id}=useParams()
    
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
        : <Loading/> 
    )
}

export default ItemDetailContainer