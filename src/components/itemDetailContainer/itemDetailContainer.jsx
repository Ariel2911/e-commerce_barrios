import { useState, useEffect } from "react"
import ItemDetail from "../itemDetail/itemDetail"
import data from '../../objProducts.json'

const ItemDetailContainer = ({id})=>{
    const [item,setItem]=useState(null)

    useEffect(() => {
        const getItem= new Promise((resolve)=>{
            setTimeout(()=>{
                resolve(data[id])
            },2000)
        })

        getItem
            .then(response=>{
                setItem(response)
            })
            .catch()
        
    }, [])
    
    return(
        item && <ItemDetail item={item}/>
    )
}

export default ItemDetailContainer