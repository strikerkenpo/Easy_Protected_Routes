import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NavBar } from './Pages/structure/NavBar';
import {Home} from './Pages/Home';
import {About} from './Pages/About';
import { Login } from './Pages/Login';
import { SecNav } from './Pages/structure/SecureNav';
import { Protect } from './Pages/Protect';
import { Account } from './Pages/Account';
import './App.css';

import { createContext, useState } from 'react';


 export const LoginContext = createContext();


function App() {
  const[loggedin, setLoggedIn] = useState(false);
  return (
    <LoginContext.Provider value={[loggedin,setLoggedIn]}>
      <BrowserRouter> {loggedin ?
       <SecNav/>:<NavBar/>
      }
      
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Account' element={
          <Protect loggedin ={loggedin}>
            <Account/>
          </Protect>
        }/>
      </Routes>
          
         
      </BrowserRouter>
    </LoginContext.Provider>
    
  );
}

export default App;
