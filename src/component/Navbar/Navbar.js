import { useState } from 'react';
import style from './Navbar.module.css'

function Navbar() {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu); // Toggle nilai showMenu ketika gambar diklik
    };

    return (
        <div className={style.container} id='nav-menu'>
            <nav className={style.navbar}>

                <div>
                    <h1>Navbar</h1>
                </div>

                <ul className={`${style.nav_list_menu} ${showMenu ? style.show_menu : ''}`}>
                    <li>Home</li>
                    <li>Courses</li>
                    <li>E-Book</li>
                    <li>About</li>
                </ul>


                <img src='icon/list.png' className={style.icon_nav_menu} onClick={toggleMenu}></img>

            </nav>
        </div>
    )
}

export default Navbar;