import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav>
            <div className="container">
                <div className="row nav-content">
                    <div className="col-md-5">
                        <Link to="/" className="logo"><i className="fab fa-digg"></i></Link>
                    </div>
                    <div className="col-md-7 nav-menu">
                        <li><Link to="#!">Products</Link></li>
                        <li><Link to="#!">Orders</Link></li>
                        <li><Link to="#!">Sell</Link></li>
                        <li><Link to="#!">About</Link></li>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
