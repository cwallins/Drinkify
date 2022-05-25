import React from 'react'

export default function Nav() {
    return (

        <div className="container">
            <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
                <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
                    <svg class="bi me-2" width="40" height="32"></svg>
                    <b><span id="logo" class="fs-4">Drinkify</span></b>
                    <br></br>
                </a>
                <ul class="nav nav-pills">
                    <b><li class="nav-item"><a href="#" id="links" class="nav-link">About Drinkify</a></li></b>
                </ul>
            </header>
        </div>

    )
}