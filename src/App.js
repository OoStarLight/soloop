import { Routes } from 'react-router-dom';
import './App.css';
import Apropos from './components/Apropos';
import Header from './components/Header';
import Panier from './components/Panier';
import { Route} from "react-router";
import Login from './components/Login';

function App() {
  return (

    <>
    <Header/>

    <Routes>

      <Route path="/Apropos" element={<Apropos/>} />
      <Route path="/Panier" element={<Panier/>} />
      <Route path="/Login" element={<Login/>}/>

    </Routes>

    </>

  );
}


export default App;
