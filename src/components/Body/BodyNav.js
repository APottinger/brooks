import { Typography, ThemeProvider, Grid } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

const BodyNav = () => {

    const font = createTheme({
        typography: {
            fontFamily: 'Island Moments, cursive'
        }
    });

    const useStyles = makeStyles({
        nav: {
            display: 'flex',
            width: '100%',
            justifyContent: 'space-around',
            
        }
    });

    const classes = useStyles();

    return (
        <div className={classes.nav}>
            <ThemeProvider theme={font}>
                <Grid container className={classes.nav}>
                    <Grid item>
                            <Typography variant='h1' color='#eeeef0'>
                                <em>eat</em>
                            </Typography>
                    </Grid>
                    <Grid item>
                            <Typography variant='h1' color='#eeeef0'>
                                <em>drink</em>
                            </Typography>
                    </Grid>
                    <Grid item>
                            <Typography variant='h1' color='#eeeef0'>
                                <em>visit</em>
                            </Typography>
                    </Grid>
                </Grid>
            </ThemeProvider>
        </div>
    )
}

export default BodyNav;
