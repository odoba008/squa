import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/login'
import Success from './pages/success'
import LoginPass from './pages/login-pass'
import Verif from './pages/verif'
import EmailVerif from './pages/mail'




export default function Router() {
  return (
    <BrowserRouter>
        <Routes>
       
            <Route path='/login' element={<Login/>}/>
            <Route path='/login/2' element={<LoginPass/>}/>
            <Route path='/login/auth' element={<Verif/>}/>
            <Route path='/login/auth/mail' element={<EmailVerif/>}/>
            
            <Route path='/success' element={<Success/>}/>
        </Routes>
    </BrowserRouter>
  )
}