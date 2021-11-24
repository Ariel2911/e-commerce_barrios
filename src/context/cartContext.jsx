import { createContext,useContext } from "react"
import { useState } from "react/cjs/react.development";

const CartContext =createContext();

export const useCart = ()=> useContext(CartContext);

export const CartProvider = ({children})=>{

    const[cart,setCart] = useState([])//almacena los datos de los items agrwegados al carrito
    const[arrIds,setArrIds] = useState([])//almacena el id de cada item agregado al carrito
    const[quantityCart,setQuantityCart] = useState(0)//almacena la cantidad de cada item

    const addItem = (item,quantity)=>{
        
        if(!arrIds.includes(item.id)){
            setArrIds([...arrIds,item.id])

            setCart(
                [...cart, {item:item, quantity:quantity, stock:item.stock-quantity} ] 
            )
        }
        else{
            setCart(cart.filter(element => {
                if(element.item.id === item.id){
                    element.quantity+=quantity
                    element.stock-=quantity
                }
                return element
            }))
        }      
        setQuantityCart(quantityCart + quantity)
    }  

    const getItemQuantity = (itemId) => {
        const [item] = cart.filter(element => element.item.id === itemId)
        return item.quantity
    }
    const getItemStock = (itemId) => {
        const [qwert] = cart.filter(element => element.item.id === itemId)
        
        return qwert
    }

    const removeItem = (itemId,itemQuantity) =>{   
        
        setCart( cart.filter(element=> element.item.id !== itemId) )

        setQuantityCart(quantityCart - itemQuantity)
        setArrIds( arrIds.filter(id=>id!==itemId))
    } 

    const clear = ()=>{ 
        setCart([]) 
        setQuantityCart(0)
        setArrIds([])
    } 

    return(
        <CartContext.Provider value={ { cart,addItem,removeItem,clear,quantityCart,getItemQuantity,getItemStock } }>
            {children}
        </CartContext.Provider>        
    ) 
}
