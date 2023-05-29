import React from 'react'
import './About.css'

import AboutBanner from '../Images/about-banner.jpg'

export default function About() {
    return (
        <>
            <img src={AboutBanner} alt="Banner Image" class="img-fluid custom-banner-img" />

            <div className='container text-center my-5'>
                <h1>We’re passionate about pushing the envelope,</h1>
                <h4>and discovering what excites you so we can pour that into every tiny,</h4>
                <h4>yet impactful detail – making sure your day is yours.</h4>
                <h6>____________</h6><br></br>

                <p>As highly experienced wedding professionals, we have a proven track record of delivering exceptional events that exceed clients’ expectations. We are known for our meticulous attention to detail, creative vision, and unwavering commitment to making each wedding a unique and unforgettable experience.</p>
                <p>With a deep understanding of the latest wedding trends, we bring a fresh and innovative approach to event planning while also ensuring that the core elements of each celebration are executed flawlessly. Whether it’s creating a beautiful and romantic setting, coordinating with vendors, or managing logistics, we handle every aspect of the wedding planning process with care and precision.</p>
                <p>Above all, we believe that the key to a successful wedding is open communication and a strong relationship with our clients. We take the time to truly understand your vision and work closely with you to bring your dream wedding to life. With our exceptional organizational skills, calm demeanor, and expertise in the industry, we have earned our reputation for a reason.</p>
            </div>

            <div class="d-flex justify-content-center align-items-center">
                <iframe class="embed-responsive-item" id="embeded" src="https://www.youtube.com/embed/8JLZakjONe4?autoplay=1" allowfullscreen></iframe>
            </div>
        </>
    )
}
