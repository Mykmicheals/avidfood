import { Card, CardContent, Typography } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'
import Slider from "react-slick"
import hero1 from '../assets/images/hero1.png'
function Menu() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 2
    };
    return (
        <div>
            <Container sx={{ my: 30 }}>
                <Typography sx={{ my: 10 }} variant='h4' align='left' >BROWSE OUR MENU</Typography>
                <Slider {...settings}>
                    <div id='menu-slider'>
                        <Card>
                            <img id='menu-img' src={hero1} />
                            <CardContent>
                                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>Beef Burger</Typography>
                                <Typography> Best with Potatoe</Typography>
                                <span id='menu-plus'>+</span>
                            </CardContent>
                        </Card>

                    </div>

                    <div id='menu-slider'>
                        <Card>
                            <img id='menu-img' src={hero1} />
                            <CardContent>
                                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>Beef Burger</Typography>
                                <Typography> Best with Potatoe</Typography>
                            </CardContent>
                        </Card>

                    </div>

                    <div id='menu-slider'>
                        <Card>
                            <img id='menu-img' src={hero1} />
                            <CardContent>
                                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>Beef Burger</Typography>
                                <Typography> Best with Potatoe</Typography>
                            </CardContent>
                        </Card>

                    </div>

                    <div id='menu-slider'>
                        <Card>
                            <img id='menu-img' src={hero1} />
                            <CardContent>
                                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>Beef Burger</Typography>
                                <Typography> Best with Potatoe</Typography>
                            </CardContent>
                        </Card>

                    </div>

                    <div id='menu-slider'>
                        <Card>
                            <img id='menu-img' src={hero1} />
                            <CardContent>
                                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>Beef Burger</Typography>
                                <Typography> Best with Potatoe</Typography>
                            </CardContent>
                        </Card>

                    </div>

        


                </Slider>
            </Container>
        </div>
    )
}

export default Menu