import { createContext,useContext } from "react"
import { useState } from "react/cjs/react.development";

const CartContext =createContext();

export const useCart = ()=> useContext(CartContext);

export const CartProvider = ({children})=>{
    const[cart,setCart] = useState([])
    const[arrId,setArrId] = useState([])
    const[quantityCart,setQuantityCart] = useState(0)

    const addItem = (item,quantity)=>{
        if(!isInCart(item.id))  {
            setCart([...cart,item])
            item.quantity=0
        }
        item.quantity+=quantity
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

    const isInCart = (id)=>{
        if(arrId.includes(id)) return true

        setArrId([...arrId,id])
        return false
    }
        
    return(
        <CartContext.Provider value={{cart,addItem,removeItem,clear,isInCart,quantityCart}}>
            {children}
        </CartContext.Provider>        
    ) 
}
