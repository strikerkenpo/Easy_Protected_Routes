import { Link } from "react-router-dom"

export const SecNav =() =>{
    return(
        
        <div>
        <nav>
            <Link to="/">Home Page</Link>
            <Link to="/Login">Login</Link>
            <Link to="/About">About</Link>
            <Link to="/Account">Account</Link>
        </nav>
    </div>

    )
}