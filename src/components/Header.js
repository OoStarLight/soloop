import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import icon1 from '../images/icons8-panier-2-64.png'
import logo from '../images/logo.png'
import './Header.css'
    export default class Header extends Component {
    render() {
        return (
        <div>
            <nav className='container-flex'>
                
                    <img src={logo} className='logo'  alt='logo'/>
                

                <ul>
                    <li><Link className='link' to="/Acceuil">Acceuil</Link></li>
                    <li><Link className='link' to="/Boutique">Boutique</Link></li>
                    <li><Link className='link' to="/Apropos">A Propos</Link></li>
                    <li><Link className='link' to="/Blog">Blog</Link></li>
                </ul>
                
                <span className='login-cart'>
                    <span className='login'>
                            <Link className='link' to="/Login">Login</Link>
                            </span>
                    <Link to="/Panier">
                        <img src={icon1} className='cart' alt='icon1'/>
                    </Link>
                </span>
                
            </nav>
        </div>
        )
    }
    }
