import React from 'react'
import HomeBanner from '../Images/home-banner.jpg'
import MarqueeImage from '../Images/home-marquee.jpg'
import BirthdayImage from '../Images/home-birthday.jpg'

import { Link } from 'react-router-dom'

import './Index.css'

export default function Index() {
    return (
        <>
            {/* Landing page banner */}
            <div class="banner">
                <img src={HomeBanner} alt="Banner Image" class="img-fluid" />
            </div>

            {/* Marquee Section  */}
            <div class="container">
                <div class="row">
                    <div class="col-lg-4 mt-5 pt-5">
                        <h1 className='mt-4'>Megestic Moments Marquee</h1>
                        <h6 className='mt-5'>Now Open for Booking!</h6>
                        <p className='mt-3'>if you’re looking for a place to celebrate your love in style, come on down to our Marquee with the golden theme. I promise you won’t regret it.</p>

                        <div class="d-flex">
                            <Link class="btn btn-secondary w-100" to="/events">Booking</Link>
                        </div>

                    </div>
                    <div class="col-lg-8 mt-5">
                        <img src={MarqueeImage} alt="Image" class="img-fluid" />
                    </div>
                </div>
            </div >

            {/* Birthday decore section */}
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 mt-5">
                        <img src={BirthdayImage} alt="Image" class="img-fluid" />
                    </div>
                    <div class="col-lg-4 mt-5 pt-5">
                        <h1 className='mt-4'>Birthday Decor</h1>
                        <p className='mt-3'>Birthdays are a chance to celebrate, commemorate past years and what’s to come and connect with friends.
                            As a busy parent, it can be stressful trying to think of the perfect theme for your upcoming birthday party, but Magestic Moments has the solution to your problem, we have unique ideas and have multiple themes for your next birthday party and manage birthday event according to your desired budget.</p>

                        <div class="d-flex">
                            <Link class="btn btn-secondary w-100" to="/events">Booking</Link>
                        </div>

                    </div>
                </div>
            </div >

            {/* Testomonials Section */}
            <section className='testimonials mt-5'>
                <div class="container py-5">
                    <div class="row d-flex justify-content-center">
                        <div class="col-md-10 col-xl-8 text-center">
                            <h2 class="fw-bold mb-4">What Our Customers Have to Say</h2>
                            {/* <p class="mb-4 pb-2 mb-md-5 pb-md-0">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error amet
                                numquam iure provident voluptate esse quasi, veritatis totam voluptas nostrum
                                quisquam eum porro a pariatur veniam.
                            </p> */}
                        </div>
                    </div>

                    <div class="row text-center">
                        <div class="col-md-4 mb-4 mb-md-0">
                            <div class="card">
                                <div class="card-body py-4 mt-2">
                                    <div class="d-flex justify-content-center mb-4">
                                        <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp"
                                            class="rounded-circle shadow-1-strong" width="100" height="100" />
                                    </div>
                                    <h5 class="font-weight-bold">Teresa May</h5>
                                    <h6 class="font-weight-bold my-3">Founder at ET Company</h6>
                                    <ul class="list-unstyled d-flex justify-content-center">
                                        <li>
                                            <i class="fas fa-star fa-sm text-info"></i>
                                        </li>
                                        <li>
                                            <i class="fas fa-star fa-sm text-info"></i>
                                        </li>
                                        <li>
                                            <i class="fas fa-star fa-sm text-info"></i>
                                        </li>
                                        <li>
                                            <i class="fas fa-star fa-sm text-info"></i>
                                        </li>
                                        <li>
                                            <i class="fas fa-star-half-alt fa-sm text-info"></i>
                                        </li>
                                    </ul>
                                    <p class="mb-2">
                                        <i class="fas fa-quote-left pe-2"></i>Majestic Moments made our dream event a reality! Their expertise and seamless coordination allowed us to enjoy our special day without any worries.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 mb-4 mb-md-0">
                            <div class="card">
                                <div class="card-body py-4 mt-2">
                                    <div class="d-flex justify-content-center mb-4">
                                        <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(15).webp"
                                            class="rounded-circle shadow-1-strong" width="100" height="100" />
                                    </div>
                                    <h5 class="font-weight-bold">Maggie McLoan</h5>
                                    <h6 class="font-weight-bold my-3">Photographer at Studio LA</h6>
                                    <ul class="list-unstyled d-flex justify-content-center">
                                        <li>
                                            <i class="fas fa-star fa-sm text-info"></i>
                                        </li>
                                        <li>
                                            <i class="fas fa-star fa-sm text-info"></i>
                                        </li>
                                        <li>
                                            <i class="fas fa-star fa-sm text-info"></i>
                                        </li>
                                        <li>
                                            <i class="fas fa-star fa-sm text-info"></i>
                                        </li>
                                        <li>
                                            <i class="fas fa-star fa-sm text-info"></i>
                                        </li>
                                    </ul>
                                    <p class="mb-2">
                                        <i class="fas fa-quote-left pe-2"></i>I highly recommend Majestic Moments for their exceptional event planning services. Their professionalism, creativity, and attention to detail made our event truly extraordinary.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 mb-0">
                            <div class="card">
                                <div class="card-body py-4 mt-2">
                                    <div class="d-flex justify-content-center mb-4">
                                        <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(17).webp"
                                            class="rounded-circle shadow-1-strong" width="100" height="100" />
                                    </div>
                                    <h5 class="font-weight-bold">Alexa Horwitz</h5>
                                    <h6 class="font-weight-bold my-3">Front-end Developer in NY</h6>
                                    <ul class="list-unstyled d-flex justify-content-center">
                                        <li>
                                            <i class="fas fa-star fa-sm text-info"></i>
                                        </li>
                                        <li>
                                            <i class="fas fa-star fa-sm text-info"></i>
                                        </li>
                                        <li>
                                            <i class="fas fa-star fa-sm text-info"></i>
                                        </li>
                                        <li>
                                            <i class="fas fa-star fa-sm text-info"></i>
                                        </li>
                                        <li>
                                            <i class="far fa-star fa-sm text-info"></i>
                                        </li>
                                    </ul>
                                    <p class="mb-2">
                                        <i class="fas fa-quote-left pe-2"></i>
                                        Majestic Moments turned our wedding day into a fairytale come true. We are forever grateful for their exceptional service and would recommend them to anyone looking for a truly memorable event.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
