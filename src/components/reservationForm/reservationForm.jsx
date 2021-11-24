import { addDoc, collection, getDocs, doc, updateDoc } from "@firebase/firestore";
import { useState } from "react"
//context
import {useCart} from '../../context/cartContext';
//firebase
import { db } from "../../firebase/index";

const ReservationForm = ()=>{
    const[buyer,setBuyer]=useState({})
    const {cart,clear} = useCart() 


    const date = new Date().toLocaleString()

    const itemUpdate= cart.map(element=>{
        return {
            id:element.item.id,
            stock:element.stock
        }                
    })
    
    const handleChange = (element)=>{
        setBuyer( { ...buyer,[element.target.id]: element.target.value } )
    }
   
    const handleSubmit = (event)=>{
        event.preventDefault()

        const order={
            buyer:buyer,
            date:date,
            items:cart
        }      
        const orderCollection = collection(db,"order")

        addDoc(orderCollection,order).then (({id})=>console.log(id))

        updateStock() 

        clear()
    }

    const updateStock = () => {
        const getData = getDocs(collection(db, "items"))
    
        getData.then(data=>{
            data.docs.forEach(element=>{
                itemUpdate.forEach(elementt => {
                    if(elementt.id===element.data().id){
                        const washingtonRef = doc(db, "items", element.id);
                
                        updateDoc(washingtonRef, {
                            stock: elementt.stock
                        });
                    } 
                });
            })
        }) 
    } 

    

    return(
        <div>
            <h1>Reserva</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Nombre</label>
                    <input type="text" id="name" onChange={handleChange}></input>                    
                </div>
                <div>
                    <label>Teléfono</label>
                    <input type="number" id="phone" onChange={handleChange}></input>
                </div>
                <div>
                    <label>Email</label>
                    <input type="email" id="email" onChange={handleChange}></input>
                </div>
                
                <button type='submit'>Enviar</button>
                
            </form>
        </div>
        

    )
}

export default ReservationForm