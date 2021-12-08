import { useState, useEffect } from "react";
import { useParams } from "react-router";
//components
import ItemList from "../itemList/itemList";
import Loading from "../loading/loading";
//styles
import "./itemListContainer.css";
//firebase
import { db } from "../../firebase";
import { collection, getDocs } from "firebase/firestore";

const ItemListContainer = ({greeting}) => {
    const {tag}=useParams();
    
    const [productos,setProductos] = useState(null);
    const [category,setcategory] = useState(null); 
    const [loading,setloading] = useState(true);  

    if(category !== tag){
        setcategory(tag);
        setloading(true);
    };

    useEffect(() => {
        const getData = getDocs(collection(db, "items"));
    
        getData.then(data=>{        
            setloading(false);
            const response=data.docs.map(doc=>doc.data());

            if(category){
                setProductos(response.filter(item=> item.tag===tag));
            }else setProductos(response);  
        });   
    }, [tag, category]);  
    
    return(
        loading ?  <Loading/> 
        : 
        <section className='itemListContainer__container'>
            <h2>{greeting}</h2>
            <ItemList items={productos}/>
        </section>
    ) 
};
export default ItemListContainer;