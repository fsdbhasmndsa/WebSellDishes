import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './User/layout/Layout';
import Index from './User/pages/Index';

function App() {
  return (
   <BrowserRouter>
   <Routes>

    <Route path=''  element={<Layout></Layout>}>

    <Route index element={<Index></Index>}></Route>

    </Route>



   </Routes>
   
   
   
   </BrowserRouter>
  );
}

export default App;
