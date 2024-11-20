import { useState } from 'react';
import style from './Navbar.module.css'
import { Link } from 'react-router-dom';

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

                <div className={style.nav_logo}>
                    <h3 className={style.logo_1}>Book</h3>
                    <h3 className={style.logo_2}>World</h3>
                </div>

                {/* showing list style by state right now */}
                <ul className={`${style.nav_list_menu} ${showMenu ? style.show_menu : ''}`}>
                    <li>
                        <Link to="/" className={style.link}>Home</Link>
                    </li>
                    <li>
                        <Link to="/Categories" className={style.link}>Categories</Link>
                    </li>
                    <li>
                        <Link to="/Books" className={style.link}>E-Book</Link>
                    </li>
                    <li>
                        <Link to="/About" className={style.link}>About</Link>
                    </li>
                </ul>

                {/* adding on click for changing state */}
                <img src='icon/list.png' className={style.icon_nav_menu} onClick={toggleMenu} alt='icon-list'></img>

            </nav>
        </div>
    )
}

export default Navbar;