import { useState, useEffect } from "react";
import { useParams } from "react-router";
//components
import ItemDetail from "../itemDetail/itemDetail";
import Loading from "../loading/loading";
//firebase
import { db } from "../../firebase";
import { collection, query, where, getDocs } from "firebase/firestore";

const ItemDetailContainer = ()=>{
    const [item,setItem]=useState(null);
    const {id}=useParams();
    
    useEffect(() => {
        const queryDb = query(collection(db, "items"), where("id", "==", id));
        const getItem = getDocs(queryDb);

        getItem.then(data=>{         
            setItem(...data.docs.map(doc=>doc.data()));            
        })
    }, [id]);      

    return(
        item ? <ItemDetail item={item}/>
        : <Loading/> 
    )
};
export default ItemDetailContainer;