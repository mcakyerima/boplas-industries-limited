import Navbar from "./Navbar";
import Footer from "./Footer";
import Featured from "./Featured";

const Layout = ({children}) => {
    return (
        <>
           <Navbar/>
                {children}
           <Footer/>
        </>
    )
}

export default Layout

