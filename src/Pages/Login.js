import {  useContext } from "react"
import { LoginContext } from "../App"

export const Login =() =>{
    const[loggedin, setLoggedIn] = useContext(LoginContext)

    const login =() =>{
        setLoggedIn(true)
    }

    const logout =() =>{
        setLoggedIn(false)
    }
    return(
        <div>
            <h1>Login</h1>
            { loggedin ?
            <button onClick={logout}>Logout</button>:
            <button onClick={login}>Login</button>

            }
          
        </div>
    )
}