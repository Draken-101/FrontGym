import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/RegisterUsers'
import userContext from './context/userContext'
import Shop from './pages/Shop';
import CarShop from './pages/CarShop';
import './index.css'
import { Route, Routes } from 'react-router-dom'
import Administration from './pages/Administration';
import Users from './pages/Users';
import PayMembership from './pages/PayMembership';
import Products from './pages/Products';
import Employees from './pages/Employees';

function App() {
  return (
    <>
      <Administration/>
      <Routes>
        <Route path='/' element={<Administration/>}/>
        <Route path='/PayMembership' element={<PayMembership/>}/>
        <Route path='/Products' element={<Products/>}/>
        <Route path='/Employees' element={<Employees/>}/>
        <Route path='/Users' element={<Users/>}/>
        <Route path='/Shop' element={<Shop/>}/>
        <Route path='/CarShop' element={<CarShop/>}/>
        <Route path='/Register' element={<Register/>}/>
        <Route path='/Login' element={<Login/>}/>
      </Routes>
    </>
  )
}

export default App
