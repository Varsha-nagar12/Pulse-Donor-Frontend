import { BrowserRouter, Route, Routes, } from "react-router-dom";
import { Toaster } from 'react-hot-toast';
import NavBar from "./NavBar" ;
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Register from "./Register";
import Login from "./Login" ;
import Verification from "./Verification";

export default function App()
{
  return <>
      <Toaster position="top-center" reverseOrder={false} />
  <NavBar/>
  <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/about" element={<About/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/register" element={<Register/>}/>
    <Route path="/login" element={<Login/>}></Route>

    <Route path="/verification" element={<Verification/>}/>

  </Routes>
   
   </>
}