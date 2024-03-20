import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from '../pages/Home'
import { NotFound } from '../pages/NotFound'
import NavBar from '../components/NavBar'
import PrivateRouter from './PrivateRoute'
import Login from '../pages/Login'
import Sustainability from '../pages/Sustainability'
import OfislerdeEnerjiVerimliligi from '../pages/OfislerdeEnerjiVerimliligi'
import UretimBoyuncaEnerjiVerimliligi from '../pages/UretimBoyuncaEnerjiVerimliligi'
import TasitlardaEnerjiVerimliligi from '../pages/TasitlardaEnerjiVerimliligi'
import SosyalKapsamVeInsan from '../pages/SosyalKapsamVeInsan'
import DongusellikGeriDonusumAtikYonetimi from '../pages/DongusellikGeriDonusumAtikYonetimi'
import Diger from '../pages/Diger'




export const AppRouter = () => {


  return (

    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='login' element={<Login />} />
          <Route path='sustainability' element={<Sustainability/>}/>
          <Route path='*' element={<NotFound />} />
          <Route element={<PrivateRouter/>}>
          <Route path='ofislerdeEnerjiVerimliligi' element={<OfislerdeEnerjiVerimliligi/>}/>
          <Route path='uretimBoyuncaEnerjiVerimliligi' element={<UretimBoyuncaEnerjiVerimliligi/>}/>
          <Route path='tasitlardaEnerjiVerimliligi' element={<TasitlardaEnerjiVerimliligi/>}/>
          <Route path='sosyalKapsamVeInsan' element={<SosyalKapsamVeInsan/>}/>
          <Route path='dongusellikGeriDonusumAtikYonetimi' element={<DongusellikGeriDonusumAtikYonetimi/>}/>
          <Route path='diger' element={<Diger/>}/>
          </Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}
