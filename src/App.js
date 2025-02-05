import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './User/layout/Layout';
import Index from './User/pages/Index';
import Login from './User/pages/Login';
import Register from './User/pages/Register';
import Cart from './User/pages/Cart';
import ProductDetail from './User/pages/ProductDetail';
function App() {
  return (
   <BrowserRouter>
   <Routes>

    <Route path=''  element={<Layout></Layout>}>

    <Route index element={<Index></Index>}></Route>
    <Route path='login' element={<Login></Login>}></Route>
    <Route path='register' element={<Register></Register>}></Route>
    <Route path='cart' element={<Cart></Cart>}></Route>
    <Route path='productDetail/:id' element={<ProductDetail></ProductDetail>}></Route>

    </Route>



   </Routes>
   
   
   
   </BrowserRouter>
  );
}

export default App;
