import { useState } from 'react';
import style from './Navbar.module.css'

function Navbar() {
    //state for menu
    const [showMenu, setShowMenu] = useState(false);

    ////change state when toggleMenu triggered
    const toggleMenu = () => {
        setShowMenu(!showMenu); 
    };

    return (
        <div className={style.container} id='nav-menu'>
            <nav className={style.navbar}>

                <div>
                    <h1>Navbar</h1>
                </div>

                {/* showing list style by state right now */}
                <ul className={`${style.nav_list_menu} ${showMenu ? style.show_menu : ''}`}>
                    <li>Home</li>
                    <li>Courses</li>
                    <li>E-Book</li>
                    <li>About</li>
                </ul>

                {/* adding on click for changing state */}
                <img src='icon/list.png' className={style.icon_nav_menu} onClick={toggleMenu}></img>

            </nav>
        </div>
    )
}

export default Navbar;