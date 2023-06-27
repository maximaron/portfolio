import * as React from "react"
import '../../style/skills.css'
import { Typography, Grid, Divider, Stack, Box, Chip } from '@mui/material';
import HtmlIcon from '@mui/icons-material/Html';
import CssIcon from '@mui/icons-material/Css';
import JavascriptIcon from '@mui/icons-material/Javascript';
import StorageIcon from '@mui/icons-material/Storage';
import PhpIcon from '@mui/icons-material/Php';
import GitHubIcon from '@mui/icons-material/GitHub';
import TerminalIcon from '@mui/icons-material/Terminal';
import CodeIcon from '@mui/icons-material/Code';
import PeopleIcon from '@mui/icons-material/People';
import PsychologyIcon from '@mui/icons-material/Psychology';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import BatteryChargingFullIcon from '@mui/icons-material/BatteryChargingFull';
import GradeIcon from '@mui/icons-material/Grade';
import Fade from 'react-reveal/Fade'
export default function skills() {
    return (
        <Grid className="skills__header" container spacing={2}>
            <Grid item xs={12} md={12}>
                <Stack spacing={3}
                    sx={{
                        textAlign: { sm: "center", md: "left", xs: 'center' },
                    }}>
                    <Typography variant="h3" className="about__maintext">Skills</Typography>
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

            <Grid className="about__main" item xs={6} md={4}>
                <Fade left>
                    <Stack spacing={3}
                        sx={{
                            textAlign: { sm: "center", md: "center", xs: "center", lg: "center" },
                            alignItems: { sm: "center", md: "center", xs: "center", lg: "center" }
                        }}>
                        <Chip icon={<HtmlIcon />} label="HTML" sx={{ userSelect: "none" }} />
                        <Chip icon={<CssIcon />} label="CSS" sx={{ userSelect: "none" }} />
                        <Chip icon={<JavascriptIcon />} label="JavaScript" sx={{ userSelect: "none" }} />
                        <Chip icon={<StorageIcon />} label="MySQL and MongoDB" sx={{ userSelect: "none" }} />
                        <Chip icon={<PhpIcon />} label="PHP" sx={{ userSelect: "none" }} />
                    </Stack>
                </Fade>
            </Grid>

            <Grid className="about__main" item xs={6} md={4}>
                <Fade bottom>
                    <Stack spacing={3}
                        sx={{
                            textAlign: { sm: "center", md: "center", xs: "center", lg: "center" },
                            alignItems: { sm: "center", md: "center", xs: "center", lg: "center" }
                        }}>
                        <Chip icon={<GitHubIcon />} label="Git" sx={{ userSelect: "none" }} />
                        <Chip icon={<TerminalIcon />} label="Bash" sx={{ userSelect: "none" }} />
                        <Chip icon={<CodeIcon />} label="React" sx={{ userSelect: "none" }} />
                        <Chip icon={<CodeIcon />} label="Laravel" sx={{ userSelect: "none" }} />
                        <Chip icon={<CodeIcon />} label="Symfony" sx={{ userSelect: "none" }} />
                    </Stack>
                </Fade>
            </Grid>
            <Grid className="about__main" item xs={12} md={4}>
                <Fade right>
                    <Stack spacing={3}
                        sx={{
                            textAlign: { sm: "center", md: "center", xs: "center", lg: "center" },
                            alignItems: { sm: "center", md: "center", xs: "center", lg: "center" }
                        }}>
                        <Chip icon={<ElectricBoltIcon />} label="Stress Resistance" sx={{ userSelect: "none" }} />
                        <Chip icon={<PeopleIcon />} label="Teamwork" sx={{ userSelect: "none" }} />
                        <Chip icon={<BatteryChargingFullIcon />} label="Energetic" sx={{ userSelect: "none" }} />
                        <Chip icon={<PsychologyIcon />} label="Multitasking" sx={{ userSelect: "none" }} />
                        <Chip icon={<GradeIcon />} label="Responsible" sx={{ userSelect: "none" }} />
                    </Stack>
                </Fade>
            </Grid>
        </Grid >
    )
}