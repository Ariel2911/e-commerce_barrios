import { createContext,useContext } from "react"
import { useState } from "react/cjs/react.development";

const CartContext =createContext();

export const useCart = ()=> useContext(CartContext);

export const CartProvider = ({children})=>{
    const[cart,setCart] = useState([])
    const[arrId,setArrId] = useState([])
    const[quantityCart,setQuantityCart] = useState(0)

    const addItem = (item,quantity)=>{
        
        if(!arrId.includes(item.id)){
            setArrId([...arrId,item.id])
            setCart([...cart,[item,quantity]])
        }
        else{
            cart.forEach(element => {
                if(element[0].id===item.id){
                    element[1]+=quantity
                }
            });
        }
        
        setQuantityCart(quantityCart + quantity)
    }    

    const removeItem = (itemId,itemQuantity) =>{
        setCart( cart.filter(item=> item.id !== itemId) )
        setQuantityCart(quantityCart - itemQuantity)
        setArrId( arrId.filter(id=>id!==itemId))
    } 

    const clear = ()=>{ 
        setCart([]) 
        setQuantityCart(0)
        setArrId([])
    } 

            
    return(
        <CartContext.Provider value={{cart,addItem,removeItem,clear,quantityCart}}>
            {children}
        </CartContext.Provider>        
    ) 
}
