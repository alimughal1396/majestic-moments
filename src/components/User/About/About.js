import React from 'react'
import './About.css'

import AboutBanner from '../Images/about-banner.jpg'

export default function About() {
    return (
        <>
            <img src={AboutBanner} alt="Banner Image" class="img-fluid custom-banner-img" />
        </>
    )
}
