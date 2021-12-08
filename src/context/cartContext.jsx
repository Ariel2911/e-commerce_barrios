import { createContext,useContext,useState } from "react";

const CartContext =createContext();

export const useCart = ()=> useContext(CartContext);

export const CartProvider = ({children})=>{

    const[cart,setCart] = useState([]);//almacena los datos de los items agregados al carrito
    const[cartIds,setCartIds] = useState([]);//almacena el id de cada item agregado al carrito
    const[quantityCart,setQuantityCart] = useState(0);//almacena la cantidad totel de items

    const addItem = (item,quantity)=>{
        
        if(!cartIds.includes(item.id)){
            setCartIds([...cartIds,item.id]);

            setCart( [...cart, {item:item, quantity:quantity, stock:item.stock-quantity} ] );
        }
        else{
            setCart(cart.map(detail => {
                if(detail.item.id === item.id){
                    detail.quantity+=quantity;
                    detail.stock-=quantity;
                }
                return detail;
            }));
        };
        setQuantityCart(quantityCart + quantity);
    };  

    const totalToPay = ()=>{
        let total=0;
        if(cart.length>0){
            const totalItem = cart.map(element=>element.item.price * element.quantity); 
            total = totalItem.reduce((acum,item)=> acum+item);
        };
        return total;
    };

    const getStock = (item) => {
        let cartItemStock = item.stock;

        if(cartIds.includes(item.id)){
            cart.forEach(element =>{
                if(element.item.id === item.id) cartItemStock = element.stock               
            });
        };
        return cartItemStock;
    };

    const removeItem = (itemId,itemQuantity) =>{           
        setCart( cart.filter(element=> element.item.id !== itemId) );
        setQuantityCart(quantityCart - itemQuantity);
        setCartIds( cartIds.filter(id=>id!==itemId));
    };

    const clear = ()=>{ 
        setCart([]); 
        setQuantityCart(0);
        setCartIds([]);
    }; 

    return(
        <CartContext.Provider value={ { cart,addItem,removeItem,clear,quantityCart,cartIds,getStock,totalToPay } }>
            {children}
        </CartContext.Provider>        
    ); 
};
