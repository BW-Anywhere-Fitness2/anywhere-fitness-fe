import React from 'react'
import { Link } from 'react-router-dom'
import './nav.css'

export default function Nav() {
    return (
        <nav>
            <h1 className='store-header'>Anywhere Fitness</h1>
            <div className='nav-links'>
                <Link to='/'>Home</Link>
                <Link to='/SignUp'>Sign Up</Link>
                <Link to='/SignIn'>Sign In</Link>
                <Link to='/Directory'>Directory</Link>
            </div>
        </nav>
    )
}