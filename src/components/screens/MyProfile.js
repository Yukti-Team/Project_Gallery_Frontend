import * as React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider, makeStyles } from '@mui/material/styles';
import { Paper } from '@mui/material';

function Copyright() {
    return (
        <Typography variant="body2" color="text.secondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const theme = createTheme();

export default function MyProfile() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />

            <main>
                {/* Hero unit */}
                <Box
                    sx={{
                        bgcolor: 'background.paper',
                        pb: 3,
                    }}
                >
                </Box>
                <Container sx={{ py: 1 }} maxWidth="md">
                    {/* End hero unit */}

                    <card>
                        <Grid container spacing={1}>
                            <Grid item xs={5}>
                                <Container
                                    sx={{ height: '100%', flexDirection: 'column' }}
                                >
                                    <CardMedia
                                        component="img"
                                        sx={{
                                            // 16:9
                                            height: 250,
                                            width: 250,
                                            borderRadius: "100%",

                                        }}
                                        image="https://w0.peakpx.com/wallpaper/979/89/HD-wallpaper-purple-smile-design-eye-smily-profile-pic-face.jpg"
                                        alt="random"

                                    />
                                    <CardContent sx={{ flexGrow: 1 }}>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            Shivaprasad Umshette
                                        </Typography>
                                        <Typography>
                                            Walchand College of Engineering, Sangli
                                        </Typography>
                                    </CardContent>
                                </Container>
                            </Grid>
                            <Grid item xs={7}>
                                <Container
                                    sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                                >
                                    <CardContent sx={{ flexGrow: 1 }}>
                                        <Grid container spacing={3}>
                                            <Grid item>
                                                <Typography gutterBottom variant="h7" component="h7">
                                                    UserID:
                                                </Typography>
                                            </Grid>
                                            <Grid item>
                                                <Typography gutterBottom variant="h7" component="h7">
                                                    @shiivaprasad0141
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                        <Grid container spacing={1}>
                                            <Grid item>
                                                <Typography gutterBottom variant="h7" component="h7">
                                                    Email:
                                                </Typography>
                                            </Grid>
                                            <Grid item>
                                                <Typography gutterBottom variant="h7" component="h7">
                                                    umshetteshivaprasad@gmail.com
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </CardContent>
                                </Container>
                            </Grid>
                        </Grid>
                    </card>
                    <hr></hr>
                    <h1> Bio</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

                    <hr></hr>
                    <h1> Tags</h1>
                    {/* <div> */}
                    {/* <fun tags={['react', 'material ui', 'javascript']} />
                        {fun.map((tag) => (
                            <Chip label={tag} key={tag} />
                        ))}
                    </div> */}
                    <hr></hr>
                    <h1>Projects</h1>
                </Container>
                <Container sx={{ py: 0 }} maxWidth="md">
                    {/* End hero unit */}
                    <Grid container spacing={4}>
                        {cards.map((card) => (
                            <Grid item key={card} xs={12} sm={6} md={4}>
                                <Card
                                    sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                                >
                                    <CardMedia
                                        component="img"
                                        sx={{
                                            // 16:9
                                            pt: '56.25%',
                                        }}
                                        image="https://source.unsplash.com/random"
                                        alt="random"
                                    />
                                    <CardContent sx={{ flexGrow: 1 }}>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            Heading
                                        </Typography>
                                        <Typography>
                                            This is a media card. You can use this section to describe the
                                            content.
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small">View</Button>
                                        <Button size="small">Edit</Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </main>








            {/* Footer */}
            <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
                <Typography variant="h6" align="center" gutterBottom>
                    Footer
                </Typography>
                <Typography
                    variant="subtitle1"
                    align="center"
                    color="text.secondary"
                    component="p"
                >
                    Something here to give the footer a purpose!
                </Typography>
                <Copyright />
            </Box>
            {/* End footer */}
        </ThemeProvider>
    );
}