import React from 'react'
import Container from '@mui/material/Container';
import { Typography, Grid, Stack, Button } from '@mui/material'
import banner from '../assets/images/hero_bg1.jpg'

import hero from '../assets/images/hero1.png'
function Banner() {
    return (


        <div className='banner' style={{
            backgroundImage: `url(${banner})`,
        }}>
            <Container sx={{ my: 10 }}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={6}>
                        <Typography variant='h2' sx={{ my: 15 }}>
                            Welcome To Our
                            Pizzer Fast Food &
                            Restaurant
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>

                        <img id='hero-img' src={hero} />
                    </Grid>

                </Grid>
            </Container>
        </div>



    )
}

export default Banner