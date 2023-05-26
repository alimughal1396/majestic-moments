import React from 'react'
import './navbar.html'
import './navbar.css'
export default function navbar() {
    return (
        <>

            <div role="navigation">
                <div class="">
                    <div class="brand-logo">
                        <a href=""><img src="/static_files/images/htmljstemplatesLogo.png" /></a>
                    </div>
                    <div class="brand-phone">
                        <a href="#"><i class="fa fa-phone me-3"></i>900 234-1234</a>
                    </div>
                    <div class="text-center">
                        <nav class="top-bar-wrap">
                            <ul class="top-bar">
                                <li class="nav-item">
                                    <a href="#" class="nav-link"><span class="inner-link">Home</span></a>
                                </li>
                                <li class="nav-item">
                                    <a href="#" class="nav-link"><span class="inner-link">About</span></a>
                                </li>
                                <li class="nav-item">
                                    <a href="#" class="nav-link"><span class="inner-link">Contact</span></a>
                                </li>
                                <li class="nav-item">
                                    <a href="#" class="nav-link"><span class="inner-link">Support</span></a>
                                </li>
                            </ul>
                        </nav>
                        <nav class="main-nav-wrap">
                            <ul class="main-nav">
                                <li class="nav-item">
                                    <a href="#" class="nav-link"><span class="inner-link">Services</span></a>
                                </li>
                                <li class="nav-item">
                                    <a href="#" class="nav-link"><span class="inner-link">Career</span></a>
                                </li>
                                <li class="nav-item">
                                    <a href="#" class="nav-link"><span class="inner-link">Features</span></a>
                                </li>
                                <li class="nav-item">
                                    <a href="#" class="nav-link"><span class="inner-link">Gallery</span></a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>

            {/* <a class="navbar-brand animated rubberBand" href="#">Logo</a> */}

            {/* <nav class="navbar navbar-expand-lg navbar-light bg-light sticky-top">
                <div class="container">
                    <a class="navbar-brand" href="#">Logo</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav ms-auto">
                            <li class="nav-item">
                                <a class="nav-link" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">About</a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Services
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a class="dropdown-item" href="#">Service 1</a></li>
                                    <li><a class="dropdown-item" href="#">Service 2</a></li>
                                    <li><hr class="dropdown-divider" /></li>
                                    <li><a class="dropdown-item" href="#">More Services</a></li>
                                </ul>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav> */}


            {/* <header class="header-section">
                <div class="container">
                    <div class="logo">
                        <a href="./index.html">
                            <img src="img/logo.png" alt="" />
                        </a>
                    </div>
                    <div class="nav-menu">
                        <nav class="mainmenu mobile-menu">
                            <ul>
                                <li class="active"><a href="./index.html">Home</a></li>
                                <li><a href="./about-us.html">About</a></li>
                                <li><a href="./speaker.html">Speakers</a>
                                    <ul class="dropdown">
                                        <li><a href="#">Jayden</a></li>
                                        <li><a href="#">Sara</a></li>
                                        <li><a href="#">Emma</a></li>
                                        <li><a href="#">Harriet</a></li>
                                    </ul>
                                </li>
                                <li><a href="./schedule.html">Schedule</a></li>
                                <li><a href="./blog.html">Blog</a></li>
                                <li><a href="./contact.html">Contacts</a></li>
                            </ul>
                        </nav>
                        <a href="#" class="primary-btn top-btn"><i class="fa fa-ticket"></i> Ticket</a>
                    </div>
                    <div id="mobile-menu-wrap"><div class="slicknav_menu"><a href="#" aria-haspopup="true" role="button" tabindex="0" class="slicknav_btn slicknav_collapsed" style="outline: none;"><span class="slicknav_menutxt">MENU</span><span class="slicknav_icon"><span class="slicknav_icon-bar"></span><span class="slicknav_icon-bar"></span><span class="slicknav_icon-bar"></span></span></a><nav class="slicknav_nav slicknav_hidden" aria-hidden="true" role="menu" style="display: none;">
                        <ul>
                            <li class="active"><a href="./index.html" role="menuitem">Home</a></li>
                            <li><a href="./about-us.html" role="menuitem">About</a></li>
                            <li class="slicknav_collapsed slicknav_parent"><a href="#" role="menuitem" aria-haspopup="true" tabindex="-1" class="slicknav_item slicknav_row"><a href="./speaker.html">Speakers</a>
                                <span class="slicknav_arrow">►</span></a><ul class="dropdown slicknav_hidden" role="menu" aria-hidden="true">
                                    <li><a href="#" role="menuitem" tabindex="-1">Jayden</a></li>
                                    <li><a href="#" role="menuitem" tabindex="-1">Sara</a></li>
                                    <li><a href="#" role="menuitem" tabindex="-1">Emma</a></li>
                                    <li><a href="#" role="menuitem" tabindex="-1">Harriet</a></li>
                                </ul>
                            </li>
                            <li><a href="./schedule.html" role="menuitem">Schedule</a></li>
                            <li><a href="./blog.html" role="menuitem">Blog</a></li>
                            <li><a href="./contact.html" role="menuitem">Contacts</a></li>
                        </ul>
                    </nav></div></div>
                </div>
            </header> */}


            {/* <div className='container'>
                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>

                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>

                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>

                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>

                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>

                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
            </div> */}
        </>
    )
}
