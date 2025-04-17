import { Box, Container, Grid, Typography, styled } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

import Avatar from "../../../../assets/images/avatar.jpg"
import StyledButton from "../../../../components/StyledButton/StyledButton";
import { AnimatedBackground } from "../../../../components/AnimatedBackground/AnimatedBackground";

const Hero = () => {

    const StyledHero = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.primary.main,
        height: "100vh",
        display: "flex",
        alignItems: "center"
    }))

    const StyledImg = styled("img")((theme) => ({
        width: "80%",
        borderRadius: "50%",
        border: '1px solid ${theme.palette.primary.contrastText}'
    }))

    return (
        <>
            <StyledHero>
                <Container maxWidth="lg">
                    <Grid container spacing={2}>
                        <Grid size={{ xs: 12, md: 5 }}>
                            <Box position="relative">
                                <Box position="absolute" width={"100%"} top={-100} right={0}>
                                    <AnimatedBackground />
                                </Box>
                                <Box position="relative" textAlign="center">
                                    <StyledImg src={Avatar} />
                                </Box>


                            </Box>

                        </Grid>
                        <Grid size={{ xs: 12, md: 7 }}>
                            <Typography color="primary.contrastText" variant="h1" textAlign="center">Lucijane Justo</Typography>
                            <Typography color="primary.contrastText" variant="h2" textAlign="center">I'm a Developer Software </Typography>
                            <Grid container display="flex" justifyContent="Center" spacing={3}>
                                <Grid size={{ xs: 12, md: 4, }} display="flex" justifyContent="Center">
                                    <StyledButton> <DownloadIcon /> <Typography>Download CV</Typography> </StyledButton>
                                </Grid>
                                <Grid size={{ xs: 12, md: 4 }} display="flex" justifyContent="Center">
                                    <StyledButton> <MailOutlineIcon /> <Typography> Contact me </Typography> </StyledButton>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            </StyledHero >
        </>
    )
}

export default Hero