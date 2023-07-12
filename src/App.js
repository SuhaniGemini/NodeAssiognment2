// import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Login from './login';
import Viewcomponent from './viewcomponent';

function App() {
  return (
    <>
    <Routes>
    <Route path ="/:id" element = {<Login/>}></Route>
      <Route path ="/" element={<Login/>}/>
      <Route path ="/view" element ={<Viewcomponent/>}/> 
         </Routes>
         </>
  );
}

export default App;
