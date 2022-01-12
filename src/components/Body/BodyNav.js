import { Typography, ThemeProvider, Grid } from '@mui/material';
import useStyles from './styles';
import theme from '../../helpers/ThemeProvider';
import { Link } from 'react-router-dom';

const BodyNav = () => {

    const classes = useStyles();

    return (
        <div>
            <ThemeProvider theme={theme}>
                <Grid container className={classes.grid}>
                    {['EAT', 'DRINK', 'VISIT'].map(item => (
                        <Grid item key={item}>
                            <Typography className={classes.gridItem} variant='h1' color='#eeeef0'>
                                <Link to='/eat'>{item}</Link>
                            </Typography>  
                        </Grid>
                    ))}
                </Grid>
            </ThemeProvider>
        </div>
    )
}

export default BodyNav;
