import style from './Navbar.module.css'

function Navbar() {
    return (
        <div className={style.container}>
            <nav className={style.navbar}>
                <div>
                    <h1>Navbar</h1>
                </div>
                <ul>
                    <li>Home</li>
                    <li>Courses</li>
                    <li>E-Book</li>
                    <li>About</li>
                </ul>
                

            </nav>
        </div>
    )
}

export default Navbar;