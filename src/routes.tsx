import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import Login from './pages/login'
import ReLogin from './pages/re-login'
import Success from './pages/success'
import LoginPass from './pages/login-pass'
import Verif from './pages/verif'
import EmailVerif from './pages/mail'
import ReLoginPass from './pages/re-login-pass'




export default function Router() {
  return (
    <BrowserRouter>
        <Routes>
       
            <Route path='/login' element={<Login/>}/>
            <Route path='/login/2' element={<LoginPass/>}/>
            <Route path='/re-login' element={<ReLogin/>}/>
            <Route path='/re-login/2' element={<ReLoginPass/>}/>
            <Route path='/login/auth' element={<Verif/>}/>
            <Route path='/login/auth/mail' element={<EmailVerif/>}/>
            
            <Route path='/success' element={<Success/>}/>
        </Routes>
    </BrowserRouter>
  )
}