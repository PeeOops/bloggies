import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './pages/Home'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import NotFound from './components/Errors/404'
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import News from './pages/News'
import Blogs from './pages/Blogs'
import Details from './pages/Details'
import PrivateRoute from './components/PrivateRoute'
import PublicRoute from './components/PublicRoute'
import User from './pages/User'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      {/* Public */}
      <Route path='/' element={<Home />} />
      <Route path="/news" element={ <News />} />
      <Route path="/blogs" element={<Blogs />} />

      {/* Private */}
      <Route path="/user/:username" element={
        <PrivateRoute>
          <User />
        </PrivateRoute>
      } />

      {/* Auth */}
      <Route path="/login" element={
        <PublicRoute>
          <Login />
        </PublicRoute>
      } />
      <Route path="/register" element={
        <PublicRoute>
          <Register />
        </PublicRoute>
      } />

      

      {/* 404 */}
      <Route path="*" element={<NotFound />} />
      <Route path="/post/:id" element={<Details />} />
    </Routes>
  </BrowserRouter>

)
