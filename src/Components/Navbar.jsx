
import logo from '../images/logo.png'
import React from 'react';

function Navbar() {
    
    return (
        
   <div >
        <div className="no"><div><p className='num' >We're here to help!Give us a woof <span>1-000-000-WOOF</span> (6369)</p></div></div>
      <nav >
          
            <a href="#" className='logo'>
          <img src={logo} alt=""  /><span>woofbox</span>
      </a>
      <input type="checkbox" className='menu-btn' id='menu-btn' />
      <label htmlFor="menu-btn" className='menu-icon'>
          <span className='nav-icon'></span>
      </label>
      <ul className='menu'>
          <li ><a href='#' >How it works</a></li>
          <li ><a href='#'>Subscribe</a></li>
          <li ><a href='#'>Gift</a></li>
          <li ><a href='#'>WoofBoxShop</a></li>
          <li ><a href='#'>Login</a></li>
          <select name="country" id="country">
          <option value="IN" >India</option>
          <option value="AE">United Arab Emirates</option>
    <option value="GB">United Kingdom</option>
    <option value="US">United States</option>
    <option value="AF">Afghanistan</option>
          </select>
      </ul>
       </nav>
       </div>
       
      
       
    )
}

export default Navbar;
