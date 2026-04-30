import '../App.css';
import { useContext } from 'react';
import { Link } from 'react-router-dom'
import MenuContext from '../context/MenuContext';


export const Menu = () => {

    const { valueMenu, handleFalseMenu } = useContext(MenuContext)

    return (
        <ul className={valueMenu ? "menu showItems" : "menu"}
            style={{ borderTopRightRadius: '5px', borderBottomRightRadius: '5px' }} >
            <Link to='/' className="menu_link" onClick={handleFalseMenu}>
                <li className="menu_item"
                    style={{ borderTopRightRadius: '5px' }}>
                    inicio
                </li>
            </Link>

            <Link to='/documents' className="menu_link" onClick={handleFalseMenu}>
                <li className="menu_item">
                    documentos
                </li>
            </Link>

            <Link to="/base" className="menu_link" onClick={handleFalseMenu}>
                <li className="menu_item">
                    enlaces qr
                </li>
            </Link>

            <Link to="/afiliacion" className="menu_link" onClick={handleFalseMenu}>
                <li className="menu_item">
                    afiliacion
                </li>
            </Link>

            <Link to="/rrhh" className="menu_link" onClick={handleFalseMenu}>
                <li className="menu_item">
                    rrhh
                </li>
            </Link>

            <Link to="/whatsapp" className="menu_link" onClick={handleFalseMenu}>
                <li className="menu_item">
                    whatsapp
                </li>
            </Link>

            <Link to="/denuncia" className="menu_link" onClick={handleFalseMenu}>
                <li className="menu_item">
                    denuncia
                </li>
            </Link>

            {/* <Link to="/news" className="menu_link" onClick={handleFalseMenu}>
                <li className="menu_item">
                    juicios
                </li>
            </Link> */}

            <Link to="/seguro" className="menu_link" onClick={handleFalseMenu}>
                <li className="menu_item"
                    style={{ borderBottomRightRadius: '5px' }}>
                    seguro
                </li>
            </Link>
        </ul>
    )
}