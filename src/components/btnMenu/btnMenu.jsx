//styles
import './btnMenu.css';

const BtnMenu = ( { active,handleMenu } )=>{    
    return(
        <button className="btn-menu" type="button" onClick={handleMenu}>
            <span className={`btn-menu__bar ${active}`}></span>
        </button>
    )
}
export default BtnMenu;