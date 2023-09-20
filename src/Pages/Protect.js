import { Navigate } from "react-router-dom"


export const Protect =({loggedin, children}) =>{
    if(!loggedin){
        return <Navigate to="/" replace/>
    }
    return children   
}