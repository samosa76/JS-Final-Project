import Container from "../component/Container/Index";
import Footer from "../component/Footer/Footer"
import Navbar from "../component/Navbar/Navbar"

const Layout = ({ children }) => {
    return (
        <>
            <Navbar />
            <main>
                
                    {children}
                
            </main>
            <Footer />
        </>
    )
}

export default Layout;