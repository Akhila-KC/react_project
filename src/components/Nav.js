import React from 'react';
import {useNavigate,NavLink} from 'react-router-dom'
import logo from './images/logo_new.png';
import resname from './images/resname.png';
import './Nav.css';

function Nav() {
  return (
    <div className="">
      <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <div className='container-fluid'>
              <center>
                <a href="" className='d-flex d-block link'><img className='logo' src={logo} alt="logo"/><img className='resname' src={resname} alt="restaurant_name"/></a>
              </center>

              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
            
                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <div className='navbar-nav ms-auto mb-2 mb-lg-0'>
                      <NavLink to="/" className="nav-item nav-link"style={({isActive,isPending})=>{
                        return{
                          color:isActive?"red":"white",
                          fontWeight:isPending?"bold":"",
                        };
                      }}>Home</NavLink>

                      <NavLink to="/about" className="nav-item nav-link"style={({isActive,isPending})=>{
                        return{
                          color:isActive?"red":"white",
                          fontWeight:isPending?"bold":"",
                        };
                      }}>About</NavLink>

                      <NavLink to="/menu" className="nav-item nav-link"style={({isActive,isPending})=>{
                        return{
                          color:isActive?"red":"white",
                          fontWeight:isPending?"bold":"",
                        };
                      }}>Menu</NavLink> 

                      <NavLink to="/contact" className="nav-item nav-link"style={({isActive,isPending})=>{
                        return{
                          color:isActive?"red":"white",
                          fontWeight:isPending?"bold":"",
                        };
                      }}>Contact</NavLink>    
                    </div>
          
                  </div>
          </div>
        </nav>
              
    </div>

  );
}

export default Nav;