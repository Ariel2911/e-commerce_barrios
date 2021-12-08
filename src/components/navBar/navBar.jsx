import { Link } from 'react-router-dom';
import { useState } from 'react';
//componnets
import BtnMenu from '../btnMenu/btnMenu';
import CartWidget from '../cartWidget/cartWidget';
//styles
import './navBar.css';

const NavBar=() => {
    const[active,setActive] = useState(null);
    const handleMenu = (e)=>{
        active ? setActive(null):setActive('active');
    };
    
    return (
        <header className='header'>            
            <BtnMenu active={active} handleMenu={handleMenu}/> 

            <Link to='/'>
                <h1 className='header__title'>Iskrem</h1>
            </Link>

            <nav className={`menu ${active}`}>
                <ul className='menu__list' onClick={handleMenu}>
                    <li className='menu__item'>
                        <Link to='/' className='menu__link menu__home'>
                            Inicio
                        </Link>                        
                    </li>
                    <li className='menu__item'>
                        <Link to='/category/crema' className='menu__link'>
                            Helados de crema
                        </Link>                        
                    </li>                    
                    <li className='menu__item'>
                        <Link to={`/category/agua`} className='menu__link'>
                            Helados de agua
                        </Link>                        
                    </li>                    
                    <li className='menu__item'>
                        <Link to='/contact' className='menu__link'>
                            Contacto
                        </Link>                        
                    </li>                    
                </ul>
            </nav>
            <CartWidget/>
        </header>            
    )
};
export default NavBar;