
import './App.css';
import Navbar from './component/Navbar';
import Cart from './component/Cart';
import Faavourite from './component/Favourite';
import Login from './component/Login';
import Signup from './component/Signup';
import View from './component/View';
import Products from './component/Products'
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
   <>
   <Navbar/>

   <Routes>
   <Route path='/cart' element={<Cart/>}/>
   <Route  path='/favourite' element={<Faavourite/>}/>
   <Route path='/login' element={<Login/>}/>
   <Route path='signup' element={<Signup/>}/>
   <Route path='/view/:id' element={<View/>}/>
   <Route path='/products' element={<Products/>}/>
    </Routes>

 
   
   </>
  );
}

export default App;
