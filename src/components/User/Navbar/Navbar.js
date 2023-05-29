import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-light bg-light sticky-top">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Majestic Moments</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link className='nav-link' to="/">Home</Link>
                            </li>

                            <li class="nav-item">
                                <Link className='nav-link' to="/about">About</Link>
                            </li>

                            <li class="nav-item">
                                <Link className='nav-link' to="/events">Events</Link>
                            </li>

                            <li class="nav-item">
                                <Link className='nav-link' to="/food">Food</Link>
                            </li>

                            <li class="nav-item">
                                <Link className='nav-link' to="/conatct">Contact</Link>
                            </li>

                        </ul>

                    </div>
                </div>
            </nav>
        </>
    )
}
