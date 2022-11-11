
import './App.css';
import Header from './HeaderContent/header/Header';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Pages from './Pages/Pages';
import Data from './Componentes/Products/Data';
import Productos from './Pages/Productos';

function App() {
  const {productItems} = Data;
  
  return (
    <>
      <Router>
        <Header/>
        <Routes>
          <Route exact path='/' element={<Pages productItems={productItems}/>}/>
          <Route path='/productos' element={<Productos productItems={productItems} />} />

        </Routes>
        
      </Router>
    </>
  );
}

export default App;
