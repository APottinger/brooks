import { Typography, Grid } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import useStyles from './styles';
import theme from '../../helpers/ThemeProvider'

const Navbar = () => {
    
    const classes = useStyles();
   
    return (
        <ThemeProvider theme={theme}>
            <Grid container className={classes.grid}>
                <Grid item>
                    <Typography className={classes.title} color='#eeeef0' variant='h5'>
                        bäche
                    </Typography>
                </Grid>
                
            </Grid>
        </ThemeProvider>
    )
}

export default Navbar
