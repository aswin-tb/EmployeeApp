import './App.css'
import Header from './component/Header'
import Footer from './component/Footer'
import { Routes,Route } from 'react-router-dom'
import Home from './page/Home'
import Login from './page/Login'
import Register from './page/Register'
import ChangePass from './page/ChangePass'
import Employee from './page/Employee'
import Forms from './page/Forms'
import Profile from './page/Profile'
function App() {

  return (
    <>
    <Header/>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/change-password" element={<ChangePass />} />
          <Route path="/employees" element={<Employee />} />
          <Route path="/forms" element={<Forms />} />
      </Routes>
    <Footer/>
    </>
  )
}

export default App
