import * as React from "react"
import '../../style/about.css'
import { Typography, Grid, Divider, Stack, Box, } from '@mui/material';

export default function about() {
    return (
        <Grid className="about__header" container spacing={2}>
            <Grid item xs={12} md={12}>
                <Stack spacing={3}
                    sx={{
                        textAlign: { sm: "center", md: "left", xs: 'center' },
                    }}>
                    <Typography variant="h3" className="about__maintext">About</Typography>
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
            <Grid className="about__main" item xs={12} md={6}>
                <Stack spacing={3}
                    sx={{
                        textAlign: { sm: "center", md: "center", xs: "center", lg: "left" },
                        alignItems: { sm: "center", md: "center", xs: "center", lg: "flex-start" }
                    }}>
                    <Typography variant="h6" className="email" id="about__part">Email: maksym.prokopovych@epitech.eu</Typography>
                    <Typography variant="h6" className="city" id="about__part">City: Mulhouse</Typography>
                    <Typography variant="h6" className="phone" id="about__part">Phone: +3395491388</Typography>
                    <Typography variant="h6" className="date" id="about__part">Date of Birth: 29 June 2000</Typography>
                    <Typography variant="h6" className="nationality" id="about__part">Nationality: Ukranien </Typography>
                </Stack>
            </Grid>
            <Grid className="about__photo" item xc={12} md={6}>
                <Stack spacing={3}
                    sx={{
                        alignItems: { sm: "center", md: "flex-start", xs: "center" }
                    }}>
                    <img className="photo_in_about" src={require('../../assets/me2.jpg')} alt="" />
                </Stack>
            </Grid>
        </Grid >
    )
}