//firebase
import { addDoc, collection, getDocs, query, where, doc, updateDoc } from "@firebase/firestore";
import { db } from "../../firebase/index";

export const createOrder = async (buyer, cart)=>{
    const date = new Date().toLocaleString();
    const order={
        buyer:buyer,
        date,
        items:cart
    };   
    const orderCollection = collection(db,"order");
    const idOrder = (await addDoc(orderCollection,order)).id;

    return idOrder;
};

export const updateStock = (cart) => {        
    const itemsUpdate= cart.map(element=>{
        return {
            id:element.item.id,
            stock:element.stock
        };               
    });
    itemsUpdate.forEach(item=>{
        const id = item.id;            
        const queryDb = query(collection(db, "items"), where("id", "==", id));
        const getItem = getDocs(queryDb);

        getItem.then(data=>{  
            data.docs.forEach(document=>{
                const documentRef = doc(db, "items", document.id);            
                updateDoc(documentRef, {stock: item.stock});
            });
        });
    });
};