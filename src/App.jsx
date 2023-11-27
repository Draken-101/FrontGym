import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/RegisterUsers'
import Shop from './pages/Shop';
import CarShop from './pages/CarShop';
import './index.css'
import { Route, Routes, Navigate } from 'react-router-dom'
import Administration from './pages/Administration';
import Users from './pages/Users';
import PayMembership from './pages/PayMembership';
import Products from './pages/Products';
import Employees from './pages/Employees';
import { useState } from 'react';
import ProductPage from './pages/ProductPage';
import RequestsContext from './context/RequestContext';
import setting from './app.setting';
import { AuthContextProvider } from './context/AuthContext';

function App() {
  const [act, setAct] = useState(true);

  const Activate = () => {
    setAct(false);
  }

  return (
    <>
      {/* {
        act ? <Administration onClick={Activate} v={"block"} /> : <Administration onClick={Activate} v={"none"} />
      } */}
      <AuthContextProvider>
        <RequestsContext.Provider value={setting}>
          <Routes>
            <Route path='/Admin' element={<Administration onClick={Activate} />} />
            <Route path='/' element={<Home />} />
            <Route path='/PayMembership' element={<PayMembership />} />
            <Route path='/Products' element={<Products />} />
            <Route path='/Employees' element={<Employees />} />
            <Route path='/Users' element={<Users />} />
            <Route path='/Shop' element={<Shop />} />
            <Route path='/CarShop' element={<CarShop />} />
            <Route path='/Register' element={<Register />} />
            <Route path='/Login' element={<Login />} />
            <Route path='/Product' element={<ProductPage />} />
          </Routes>
        </RequestsContext.Provider>
      </AuthContextProvider>
    </>
  )
}

export default App
