import { useState } from "react";
//context
import {useCart} from '../../context/cartContext';
//components
import Loading from "../loading/loading";
//styles
import './reservationForm.css';
//
import { checkForError } from './formValidation';
import { createOrder, updateStock } from './updateStock';

const ReservationForm = ({enterData, fun})=>{
    const[buyer,setBuyer] = useState({name:'',phone:'',email:''});//contiene los datos del comprador
    const[disabledSubmit,setDisabledSubmit] = useState(false);//habilita o deshabilita el boton "enviar"
    const[error,setError] = useState({name:'',phone:'',email:''});//contiene los mensajes de error del formulario
    const[errorMessaee,setErrorMesage] = useState(false);//contiene un aviso para el usuario
    const [loading,setloading] = useState(false); 

    const {cart,clear} = useCart();
    
    const handleChange = (event)=>{
        const value = event.target.value;
        const id = event.target.id;
        setBuyer({...buyer,[id]:value});                      
    };   
    const handleSubmit = async (event)=>{
        event.preventDefault();

        const listOfErrors = checkForError(buyer);//crea un array con los errores detectados en el formulario
        setError(listOfErrors);
        if(Object.keys(listOfErrors).length > 0) return setErrorMesage(true);
        setErrorMesage(false);
        setDisabledSubmit(true);
        setloading(true);

        fun(await createOrder(buyer, cart));

        setBuyer({name:'',phone:'',email:''});//borra el formulario
        updateStock(cart);//actueliza el stock en la base de datos
        clear();//Borra los articulos del carrito
    };
    const inputs = [
        {
            label:"Nombre",
            id:"name"
        },
        {
            label:"Teléfono",
            id:"phone"
        },
        {
            label:"Email",
            id:"email"
        }
    ];
    return(
        <div className={enterData}>
            <h2 className='title'>Datos del comprador</h2>
            <form className='card' onSubmit={handleSubmit}>                
                {inputs.map(input=>{
                    return(
                        <div className='reservationForm__container' key={input.id}>
                            <label className='reservationForm__label'>{input.label}</label>
                            <input 
                                className='reservationForm__input'
                                type="text" 
                                value={buyer[input.id]} 
                                id={input.id} 
                                onChange={handleChange}>
                            </input>  
                            <p>{error[input.id]}</p>                  
                        </div> 
                    )
                })}                               
                <button className='btn' type='submit' disabled={disabledSubmit}>Enviar</button>             
            </form>
            <p>{ errorMessaee && `Campos invalidos. Revise los datos ingresados` }</p>
            {loading &&  <Loading/>}            
        </div>
    )
};
export default ReservationForm;