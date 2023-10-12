import React, { Component } from 'react';

import cube from "../images/cub-club-logo.png"

class NavBar extends Component {
    render() {
        return (
            <nav className='nav'>

                <ul style={{display:"flex", listStyle:"none"}}>
                    <li><div className='nav-link'><a className='nav-link-text' href="/results/single" >Single</a></div></li>
                    <li><div className='nav-link'><a className='nav-link-text' href="/results/average">Average</a></div></li>
                </ul>
                <div style={{flexGrow:1}}></div>
                <img src={cube} alt="The logo of cub-club-logo campus" className='nav-img'></img>
            </nav>
        );
    }
}

export default NavBar;