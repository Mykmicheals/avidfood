import { Container } from '@mui/system'
import React from 'react'
import { Typography } from '@mui/material';
import gallery1 from '../assets/images/gallery1.jpg'
import gallery2 from '../assets/images/gallery2.jpg'
import gallery3 from '../assets/images/gallery3.jpg'
import gallery4 from '../assets/images/gallery4.jpg'
import gallery5 from '../assets/images/gallery5.jpg'

import Slider from "react-slick"

function Gallery() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 2
    };
    return (
        <Container sx={{ my: 43 }}>
            <Typography variant='h4'>Our Foods Gallery</Typography>


            <Container sx={{ my: 13 }}>
                <Slider {...settings}>
                    <div className='slider-gallery'>
                        <img id='first-slider-img' src={gallery1} />
                    </div>
                    <div>
                        <img id='first-slider-img' src={gallery2} />

                    </div>
                    <div>
                        <img id='first-slider-img' src={gallery3} />

                    </div>
                    <div>
                        <img id='first-slider-img' src={gallery4} />

                    </div>
                    <div>
                        <img id='first-slider-img' src={gallery5} />

                    </div>

                </Slider>
            </Container>

        </Container>
    )
}

export default Gallery