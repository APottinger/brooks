import { Typography, ThemeProvider, Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import theme from '../../helpers/ThemeProvider';

const BodyNav = () => {

    const useStyles = makeStyles({
        grid: {
            height: '70vh',
            display: 'flex',
            paddingLeft: '50px',
            justifyContent: 'center',
            alignItems: 'center'
        },
        gridItem: {
            fontSize: '10rem',
            padding: '2rem',
            cursor: 'pointer',
            transition: '1s ease',
            '&:hover': {
                color: '#b59c82'
            }
        }
    });

    const classes = useStyles();

    return (
        <div>
            <ThemeProvider theme={theme}>
                <Grid container className={classes.grid}>
                    {['EAT', 'DRINK', 'VISIT'].map(item => (
                        <Grid item key={item}>
                            <Typography className={classes.gridItem} variant='h1' color='#eeeef0'>
                                {item}
                            </Typography>
                        </Grid>
                    ))}
                </Grid>
            </ThemeProvider>
        </div>
    )
}

export default BodyNav;
