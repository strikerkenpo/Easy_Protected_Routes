
import { Link } from "react-router-dom";



export const NavBar =() =>{
        const img = ["./Pictures/autobot2.png"]
        return(
            <div >
                
                <nav className="navbar">
                    <Link to="/" className="grid8">Home Page</Link>
                    <Link to="/Login" className="grid9">Login</Link>
                    <Link to="/About">About</Link>
                    <img src={img} height={50} width={50} className="grid16" alt=""/>
                 </nav>
            </div>
        
        )
}
    
        
    
    
