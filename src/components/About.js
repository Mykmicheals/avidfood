import { Grid } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'
import about1 from '../assets/images/about1.png'
import about2 from '../assets/images/about2.png'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { Typography } from '@mui/material'



function About() {
    return (
        <Container sx={{ my: 10 }}>
            <Grid container sx={4}>
                <Grid xs={7.5}>
                    <img id='about-img-1' src={about1} />
                    <img id='about-img-2' src={about2} />
                </Grid>

                <Grid xs={4.5}>
                    <Typography variant='h6' color='#EB032C' gutterBottom align='left'>Our Story</Typography>
                    <Typography variant='h5' align='left' gutterBottom>The Pizzer Has Excellent Of</Typography>
                    <Typography variant='h4' color='#EB032C' align='left' gutterBottom>Quality Foods</Typography>

                    <Typography color="text.secondary" gutterBottom sx={{ mt: 5 }} variant='p'>Compellingly supply professional material rather than out-of-the-box process improvements. Phosfluorescently communicate premium mindshare and extensive imperatives. Dynamically fashion.
                    </Typography>

                    <Typography color="text.secondary" sx={{ my: 5 }}>
                        Seamlessly conceptualize sticky functionalities after prospective data. Interactively unleash customized supply chains whereas goal oriented paradigm. Credibly reintermediate client-focused model for.</Typography>

                    <Stack direction="row" spacing={2}>
                        <Button sx={{ backgroundColor: '#EB0029' }} variant="contained">Discover More</Button>


                        <Typography variant="h4">
                            24
                        </Typography>

                        <Typography variant="h6">
                            EXPERIENCE
                        </Typography>

                    </Stack>

                </Grid>
            </Grid>
        </Container>
    )
}

export default About