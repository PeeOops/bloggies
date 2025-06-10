import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './pages/Home'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import NotFound from './components/404'
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import News from './pages/News'
import Blogs from './pages/Blogs'
import Details from './pages/Details'


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path="/news" element={<News />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/news/id" element={<Details />} />
    </Routes>
  </BrowserRouter>

)
