import { Routes, Route } from 'react-router-dom';
import './App.css';
import About from './pages/About';
import Cart from './pages/Cart';
import Products from './pages/Products';
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import {AddProducts} from "./pages/AddProducts";

function App() {
    return(
        <Routes>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/products' element={<Products/>}/>
            <Route path='/addproducts' element={<AddProducts/>}/>
            <Route path='/' element={<Home/>}/>
        </Routes>
    )
}

export default App;