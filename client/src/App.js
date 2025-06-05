import React from 'react';
import './App.css'
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import BlogDetail from './pages/BlogDetail';
// import Profile from './pages/Profile';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Header from './components/Header';
import CreateBlog from './pages/CreateBlog';
// import Settings from './pages/Settings';
import UpdateUserInfo from './pages/UpdateUserInfo';
import UpdatePassword from './pages/UpdatePassword';
import Dashboard from './pages/Dashboard';
import UpdateBlog from './pages/UpdateBlog';
import Footer from './components/Footer';
import SubscribeNewsletter from './pages/SubscribeNewsletter';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
        {/* <Route path="/profile/:id" element={<Profile />} /> */}
        <Route path="/dashboard/:id" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/create-blog" element={<CreateBlog />} />
        <Route path="/signup" element={<Signup />} />
        {/* <Route path="/settings/:id" element={<Settings />} /> */}
        <Route path="/update-profile/:id" element={<UpdateUserInfo />} /> 
        <Route path="/update-password/:id" element={<UpdatePassword />} /> 
        <Route path="/update-blog/:id" element={<UpdateBlog />} /> 
        <Route path="/newsletter" element={<SubscribeNewsletter />} /> 
        
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
