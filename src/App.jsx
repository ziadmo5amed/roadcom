import './App.css'
import Nav from './components/navigation/Nav';
 
 
import {Route , Routes , Link} from "react-router-dom";
import Header from './components/header/Header';
import  Info  from './components/information/Info';
function App() {
 
  return (
    <>
    <Nav />
    <Header />
    <Info />

 </>
  )
}

export default App ;
