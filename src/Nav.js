import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
    return (

        <div>
            <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
                <Link to="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
                    <b><span id="logo" class="fs-4">Drinkify</span></b>
                    <span id="drink" class="material-symbols-outlined">local_bar</span>
                    <br></br>
                </Link>
                <ul className="nav nav-pills">
                    <b><li className="nav-item"><Link to="/mydrinks" id="links" className="nav-link">My Drinks</Link></li></b>
                    <b><li className="nav-item"><Link to="/about" id="links" className="nav-link">About Drinkify</Link></li></b>
                </ul>
            </header>
        </div>

    )
}