import React from 'react'
import  logo  from '../logo.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
function Navbar() {
    return (
     <div>
        <nav className="navbar navbar-expand-lg navbar-light ">
            <div className="container">
                        <a className="navbar-brand" href="#"><img className="logo" src={logo} alt='Logo...'></img></a>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            < FontAwesomeIcon icon={ faBars  } style={{color:`rgb(0, 199, 235)`}}/>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <ul className="navbar-nav">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link " href="#">About me</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link " href="#">my work</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link " href="#">portfolio</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link " href="#">contact me</a>
                            </li>
                            </ul>
                        </div>
            </div>
        </nav>
            
    </div>
    )
}

export default Navbar
