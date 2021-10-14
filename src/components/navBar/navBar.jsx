import CartWidget from '../cartWidget/cartWidget'
import './navBar.css'
const NavBar=() => {
    return (
        <header className='header'>

            <h1 className='header_title'>E-Commerce</h1>

            <nav className='menu'>
                <ul className='menu_list'>
                    <li className='menu_item'>
                        <a href="/#" className='menu_link menu_home'>Inicio</a>
                    </li>
                    <li className='menu_item'>
                        <a href="/#" className='menu_link'>Producos</a>
                    </li>
                    <li className='menu_item'>
                        <a href="/#" className='menu_link'>Novedades</a>
                    </li>
                    <li className='menu_item'>
                        <a href="/#" className='menu_link'>Contacto</a>
                    </li>
                </ul>
            </nav>

            <CartWidget/>

        </header>            
    )
}

export default NavBar