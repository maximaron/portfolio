import * as React from "react"
import '../../style/about.css'
import { Typography, Grid, Divider, Stack, Box, Chip } from '@mui/material';
import PlaceIcon from '@mui/icons-material/Place';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';

export default function about() {
    return (
        <Grid className="skills__header" container spacing={2}>
            <Grid item xs={12} md={12}>
                <Stack spacing={3}
                    sx={{
                        textAlign: { sm: "center", md: "left", xs: 'center' },
                    }}>
                    <Typography variant="h3" className="about__maintext">Contact</Typography>
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

            <Grid className="about__main" item xs={12} md={4}>

                <Stack spacing={3}
                    sx={{
                        textAlign: { sm: "center", md: "center", xs: "center", lg: "center" },
                        alignItems: { sm: "center", md: "center", xs: "center", lg: "center" }
                    }}>
                    <Chip icon={<PlaceIcon />} label="Mulhouse,France" sx={{ userSelect: "none" }} />
                    <Chip icon={<LocalPhoneIcon />} label="+3395491388" sx={{ userSelect: "none" }} />
                    <Chip icon={<EmailIcon />} label="maksym.prokopovych.pro@gmail.com" sx={{ userSelect: "none" }} />
                </Stack>
            </Grid>


        </Grid >
    )
}