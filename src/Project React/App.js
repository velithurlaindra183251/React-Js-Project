import React from 'react'
import  '../Project React/Nav.css'
import Food from './Food'
import Movies from '../Project React/Movies'
import About from '../Project React/About'
import Login from './Login'
import Home from '../Project React/Home'
import Products from '../Project React/Products'
import Contact from '../Project React/Contact'
import CheckBMI from '../Project React/CheckBMI'
import Api from '../Project React/Api'
import News from '../Project React/News'
import pic1 from '../images/brid.png'
/* import pic1 from '../images/logo-mt.png' */
import Weather from '../Project React/Weather'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
export default function Navbar() {
    return (
        <>
 <BrowserRouter>
        <nav className="navbar navbar-expand-lg navbar-light bg-warning">
          <div className="container-fluid">
            <img src={pic1} className="d-block" alt="Logo" style={{ width: 150, height:90 }} />
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav mx-auto">

              <li className="nav-item ">
                  <Link className="nav-link" to="/Login" >Login</Link>
                </li>
                <li className="nav-item ">
                  <Link className="nav-link" to="/Home">Home</Link>
                </li>
             
                <li className="nav-item">
                  <Link className="nav-link" to="/about">About</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contact">Contact</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/CheckBMI">Check BMI</Link>
                </li>
                 <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  APIs
                </Link>
                <ul className="dropdown-menu bg-warning" aria-labelledby="navbarDropdown" >
                  <li><Link className="dropdown-item" to="/Weather">Weather API</Link></li>
                  <li><Link className="dropdown-item" to="/News">News API</Link></li>
                  <li><Link className="dropdown-item" to="/Food" >Food Recipe API</Link></li>
                  <li><Link className="dropdown-item" to="/Movies">Movie API</Link></li>
                  <li><Link className="dropdown-item" to="/Products">Products API</Link></li>
                </ul>
              </li>
              </ul>
              <form className="d-flex" role="search">
             <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success" type="submit">Search</button>
           </form>
            </div>
          </div>
        </nav>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path ="/Login" element={<Login/>} />    
               <Route path="/contact" element={<Contact />} />
          <Route path="/CheckBMI" element={<CheckBMI />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/Api" element={<Api />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Food" element={<Food />}/>
          <Route path="/Movies" element={<Movies />}/>
          <Route path="/News" element={<News />}/>
          <Route path="/Weather" element={<Weather />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}
 
