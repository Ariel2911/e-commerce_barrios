
export const checkForError = (buyer) =>{ 
    const errors={};
    const regexName =  /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    const regexPhone = /^[0-9]/;
    const regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;

    if(!buyer.name.trim()){
        errors.name = 'El campo "Nombre" es requerido'; 
    }else  if( !regexName.test(buyer.name) ){
        errors.name ='El campo "Nombre" sólo acepta letras y espacios en blanco';
    };

    if(!buyer.phone.trim()){
        errors.phone = 'El campo "Teléfono" es requerido'; 
    }else if( !regexPhone.test(buyer.phone) ){
        errors.phone ='El campo "Teléfono" sólo acepta números'; 
    };

    if( !buyer.email.trim() ){
        errors.email ='El campo "Email" es requerido';
    }else  if(!regexEmail.test(buyer.email) ){
        errors.email ='Debe introducir un "Email" valido';
    };
    return errors;
}