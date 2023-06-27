import * as React from "react"
import '../../style/home.css'
import { Typography, Grid, Divider, Stack, } from '@mui/material';

export default function home() {
    return (
        <Grid className="home__header" container spacing={2}>
            <Grid item xs={12} md={6}>
                <img className="me__img" src={require('../../assets/me.png')} />
            </Grid>
            <Grid className="home__description" item xs={12} md={6}>
                <Stack spacing={3}
                    sx={{
                        textAlign: { sm: "center", md: "left", xs: "center" }
                    }}>
                    <Typography variant="h3" className="maintext">Hello, I am </Typography>
                    <Typography variant="h3" fontWeight={"bold"} className="maintext__name">Prokopovych Maksym</Typography>
                    <Divider sx={{ borderBottomWidth: 3 }} />
                    <Typography variant="h4" className="description__text">Web developer and student at Epitech</Typography>
                    <Divider sx={{ borderBottomWidth: 3 }} />
                </Stack>
            </Grid>
        </Grid>

    )
}