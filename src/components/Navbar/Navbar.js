import { Typography, Grid, Stack } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import useStyles from './styles';

const Navbar = () => {
    
    const classes = useStyles();

    const theme = createTheme({
        typography: {
            fontFamily: 'Italiana, serif'
        }
    }); 
    
    return (
        <Grid container>
            <ThemeProvider theme={theme}>
            <Grid item>
                <Typography className={classes.title} color='white' variant='h5'>
                    bäche
                </Typography>
            </Grid>
            <Grid item>
                <Stack>

                </Stack>
            </Grid>
            </ThemeProvider>
        </Grid>
    )
}

export default Navbar
