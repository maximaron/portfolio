import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import '../../style/portfolio.css'
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Typography, Grid, Divider, Stack, Box, Chip } from '@mui/material';


const CarouselComponent = () => {
    return (
        <Grid className="portfolio__header" container spacing={2} justifyContent={"center"}>
            <Grid item xs={12} md={12}>
                <Stack spacing={3}
                    sx={{
                        textAlign: { sm: "center", md: "left", xs: 'center' },
                    }}>
                    <Typography variant="h3" className="education__maintext">Portfolio</Typography>
                </Stack>
                <Stack spacing={3}
                    sx={{
                        alignItems: { sm: 'center', md: "flex-start", xs: "center" }
                    }}>
                    <Box sx={{ width: "75px" }}>
                        <Divider sx={{ borderBottomWidth: 3 }} />
                    </Box>
                </Stack>
            </Grid>
            <Box display={'flex'} justifyContent={'center'} >
                <Carousel showThumbs={false} showStatus={false} width={'70vw'}>
                    <div>
                        <img className="car_img" src={require('../../assets/home.png')} alt="Image 1" />
                    </div>
                    <div>
                        <img className="car_img" src={require('../../assets/tweet.png')} alt="Image 2" />
                    </div>
                    <div>
                        <img className="car_img" src={require('../../assets/meetic.png')} alt="Image 3" />
                    </div>
                </Carousel>
            </Box>
        </Grid >

    );
};

export default CarouselComponent;
