import * as React from "react"
import '../../style/education.css'
import { Typography, Grid, Divider, Stack, Box, Chip } from '@mui/material';

export default function education() {
    return (
        <Grid className="education__header" container spacing={2}>
            <Grid item xs={12} md={12}>
                <Stack spacing={3}
                    sx={{
                        textAlign: { sm: "center", md: "left", xs: 'center' },
                    }}>
                    <Typography variant="h3" className="education__maintext">Education</Typography>
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
            <Grid className="pic__main" item xs={12} md={12}>
                <Stack spacing={3}
                    sx={{
                        textAlign: { sm: "center", md: "center", xs: 'center' },
                        alignItems: { sm: "center", md: "center", xs: "center", lg: "center" }
                    }}>
                    <img className="webac__img" src={require('../../assets/webac.png')} />
                </Stack>
            </Grid>
            <Grid className="edu__subtext" item xs={12} md={12}>
                <Stack spactin={3}
                    sx={{
                        textAlign: { sm: "center", md: "center", xs: "center" }
                    }}>
                    <Typography variant="h5" className="edu__sub__maintext">At the Web@cadémie, we learn using a project-based method. It's a dynamic model, based on exchange, collaborative work and proximity to the business world. We test, we experiment, we move forward, we make mistakes... and we start again.</Typography>
                </Stack>
            </Grid>
        </Grid>
    )
}