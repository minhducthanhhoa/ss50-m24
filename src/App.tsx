import React from 'react'
import Home from './components/Home/Home'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header'
import Register from './components/register/Register'
import Login from './components/Login/Login'
import Products from './components/Products/Products'
import ProductDetail from './components/ProductDetail/ProductDetail'
import Bai1 from './components/Bai1'
import Bai2 from './components/Bai2'
import Bai3 from './components/Bai3'
import Bai4 from './components/Bai4'
import Login1 from './components/Bai5/Login1'
import PrivateRouter from './components/Bai5/PrivateRouter'
import Account from './components/Bai5/Account'
import Login2 from './components/Bai6/Login2'
import PrivateRouter2 from './components/Bai6/PrivateRouter2'
import Account2 from './components/Bai6/Account2'
import Teams from './components/Bai7/Teams'
import TeamsIndex from './components/Bai7/TeamsIndex'
import Team from './components/Bai7/Team'

export default function App() {
  return (
    <div>App
      <Routes>
        <Route path='/home' element={<Home />}>
          <Route path='/home/header' element={<Header />}></Route>
        </Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/products' element={<Products />}></Route>
        <Route path='/productdetail/:productId' element={<ProductDetail />}></Route>
        <Route path='/product/:id' element={<Bai1 />}></Route>
        <Route path='/student/:name' element={<Bai2 />}></Route>
        <Route path='/employee' element={<Bai3 />}></Route>
        <Route path='/student' element={<Bai4 />}></Route>
        <Route path="/login1" element={<Login1 />} />
        <Route element={<PrivateRouter />}>
          <Route path="/account" element={<Account />} />
        </Route>
        <Route path="/login2" element={<Login2 />} />
        <Route element={<PrivateRouter2 />}>
          <Route path="/account2" element={<Account2 />} />
        </Route>
        <Route path="/teams" element={<Teams />}>
          <Route index element={<TeamsIndex />} />
          <Route path="/teams/:teamId" element={<Team />} />
        </Route>
      </Routes>
    </div>
  )
}
