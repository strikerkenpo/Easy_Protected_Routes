
import { Link } from "react-router-dom";



export const NavBar =() =>{
       
        return(
            <div >
                
                <nav className="navbar">
                    <Link to="/" className="grid8">Home Page</Link>
                    <Link to="/Login" className="grid9">Login</Link>
                    <Link to="/About">About</Link>
                   
                 </nav>
            </div>
        
        )
}
    
        
    
    
