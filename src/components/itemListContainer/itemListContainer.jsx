import { useState, useEffect } from "react"
import { useParams } from "react-router"
//components
import ItemList from "../itemList/itemList"
import Loading from "../loading/loading"
//styles
import './itemListContainer.css'
//firebase
import { db } from "../../firebase";
import { collection, getDocs } from "firebase/firestore";

const ItemListContainer = ({greeting}) => {
    const {id}=useParams()
    
    const [productos,setProductos] = useState(null)
    const [category,setcategory] = useState(null)  
    const [loading,setloading] = useState(true)  

    if(category !== id){
        setcategory(id)
        setloading(true)
    }

    useEffect(() => {
        const getData = getDocs(collection(db, "items"))
    
        getData.then(data=>{        
            setloading(false)
            const res=data.docs.map(doc=>doc.data())
                if(category){
                    setProductos(res.filter(e=> e.tag===id))
                }
                else setProductos(res)  
            })     

    }, [id, category])  
    
    return(
        loading ?  <Loading/> 
        : 
        <section className='itemListContainer__container'>
            <h2>{greeting}</h2>
            <ItemList items={productos}/>
        </section>
    ) 
}

export default ItemListContainer