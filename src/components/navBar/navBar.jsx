import { Link } from 'react-router-dom'
import CartWidget from '../cartWidget/cartWidget'
import './navBar.css'
const NavBar=() => {
    return (
        <header className='header'>
            <Link to='/'>
                <h1 className='header_title'>E-Commerce</h1>
            </Link>
            <nav className='menu'>
                <ul className='menu_list'>
                    <li className='menu_item'>
                        <Link to='/' className='menu_link menu_home'>
                            Inicio
                        </Link>                        
                    </li>
                    <li className='menu_item'>
                        <Link to='/category/crema' className='menu_link'>
                            Helados de crema
                        </Link>                        
                    </li>                    
                    <li className='menu_item'>
                        <Link to={`/category/agua`} className='menu_link'>
                            Helados de agua
                        </Link>                        
                    </li>                    
                    <li className='menu_item'>
                        <Link to='/contact' className='menu_link'>
                            Contacto
                        </Link>                        
                    </li>                    
                </ul>
            </nav>

            <CartWidget/>

        </header>            
    )
}

export default NavBar