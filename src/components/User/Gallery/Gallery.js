import React from 'react'
import './Gallery.css'

import Image1 from '../Images/Gallery/image1.jpg'
import Image2 from '../Images/Gallery/image2.jpg'
import Image3 from '../Images/Gallery/image3.jpg'
import Image4 from '../Images/Gallery/image4.jpg'
import Image5 from '../Images/Gallery/image5.jpg'
import Image6 from '../Images/Gallery/image6.jpg'
import Image7 from '../Images/Gallery/image7.jpg'
import Image8 from '../Images/Gallery/image8.jpg'
import Image9 from '../Images/Gallery/image9.jpg'
import Image10 from '../Images/Gallery/image10.jpg'


export default function Gallery() {
    return (
        <>
            <div class="scroll-container">
                <img src={Image1} alt="Cinque Terre" />
                <img src={Image2} alt="Forest" />
                <img src={Image3} alt="Northern Lights" />
                <img src={Image4} alt="Cinque Terre" />
                <img src={Image5} alt="Forest" />
                <img src={Image6} alt="Northern Lights" />
                <img src={Image7} alt="Cinque Terre" />
                <img src={Image8} alt="Forest" />
                <img src={Image9} alt="Northern Lights" />
                <img src={Image10} alt="Cinque Terre" />
            </div>
        </>
    )
}
