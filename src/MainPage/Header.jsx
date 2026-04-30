import { useContext } from 'react';
import '../App.css';
import MenuContext from '../context/MenuContext';

export const Header = () => {

    const { valueMenu, handleTrueMenu, handleFalseMenu } = useContext(MenuContext)

    return (
        <header>
            <div className="respmenu">
                <nav onClick={!valueMenu ? handleTrueMenu : handleFalseMenu}
                    className={valueMenu ? "main-nav showNav" : "main-nav"}
                    id="main-nav">
                    <div className="menu-bar">
                        <div className="one"></div>
                        <div className="two"></div>
                        <div className="three"></div>
                    </div>

                    <div id="menuBox">
                        <button id="btnMenu">menu</button>
                    </div>
                </nav>
            </div>

            <h3>ugt</h3>
        </header>
    )
}