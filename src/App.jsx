import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/RegisterUsers'
import userContext from './context/userContext'
import Shop from './pages/Shop';
import CarShop from './pages/CarShop';

import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Shop' element={<Shop/>}/>
        <Route path='/CarShop' element={<CarShop/>}/>
        <Route path='/Register' element={<Register/>}/>
        <Route path='/Login' element={<Login/>}/>
      </Routes>
    </>
  )
}

export default App
