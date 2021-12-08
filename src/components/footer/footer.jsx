import './footer.css';
import insttagram from './instagram.svg';
import facebook from './facebook.svg';
import twitter from './twitter.svg';

const Footer = ()=>{
    return(
        <div className='footer__container'>
            <div className= 'footer__socialNetworks'> 
                <img src={facebook} className='img' alt="Icono de facebook" />
                <img src={insttagram} className='img' alt="Icono de instagram" />
                <img src={twitter} className='img' alt="Icono de twitter" />
            </div>
            <p>Desarrollado por: Ariel Barrios</p>
        </div>
    )
};
export default Footer;