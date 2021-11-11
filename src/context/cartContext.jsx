import { createContext,useContext } from "react"
import { useState } from "react/cjs/react.development";

const CartContext =createContext();

export const useCart = ()=> useContext(CartContext);

export const CartProvider = ({children})=>{
    const[cart,setCart] = useState([])

    const addItem = (item,quantity)=>{

        const ids=cart.map(item=>item.id)

        if(!ids.includes(item.id)){
            item.quantity=quantity
            setCart([...cart,item])
        }
        else {
            item.quantity+=quantity
            setCart([...cart])
        }
    }    
    const removeItem = itemId =>{
        setCart(
            cart.filter(item=> item.id !== itemId)
        )
    }    
    const clear = ()=>{
        setCart([])
    
    }    
    const isInCart = (id)=>{
    
    }

    console.log(cart)
    
    return(
        <CartContext.Provider value={{cart, addItem,removeItem,clear,isInCart}}>
            {children}
        </CartContext.Provider>        
    ) 
}
