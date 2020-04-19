import React from 'react';
import './menuBar.css';

const Menu = () =>{
    return(
        <div className='menu'>
            <h2>CATEGORIES</h2>
            <ul className='list1'>
                <li>ELECTRONICS</li>
                <ul>
                    <li>PHONES</li>
                    <li>EARPHONES</li>
                    <li>TV</li>
                </ul>
                <li>CLOTHING</li>
                <ul>
                    <li>MEN</li>
                    <li>WOMEN</li>
                </ul>
                <li>GROCERY</li>
            </ul>
        </div>
    );
}

export default Menu;