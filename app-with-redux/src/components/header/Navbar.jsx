import './navbar.css'
import {Link,Outlet} from 'react-router-dom'
/**
 * 
 */
const Navbar = () => {
    return (
        <>
        
        <div className="navbar">

            <Link to={""} className='navbar-link'>Home
            </Link>
          
          
        </div>
        <Outlet/>
        
        </>
    );
}



export default Navbar;