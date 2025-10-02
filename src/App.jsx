import './App.css'
import Nav from './components/navigation/Nav';
 
 
import {Route , Routes , Link} from "react-router-dom";
import Header from './components/header/Header';
import  Info  from './components/information/Info';
import Mgalat from './components/mgalat/Mgalat'
function App() {
 
  return (
    <>
    <Nav />
    <Header />
    <Info />
    <Mgalat />
 </>
  )
}

export default App ;
