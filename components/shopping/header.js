import React from 'react';
import './header.css';

const Header = ()=>{
    return(
        <div className='header'>
            <h1><i style={{color:'#d51e27'}} class="fas fa-shopping-cart"></i>  UniversalShop</h1>
            <input type='text' placeholder='ENTER PRODUCT NAME' className='search'/>
            <button><i style={{color:'white'}} class="fab fa-searchengin"></i></button>
        </div>
    );
}

export default Header;