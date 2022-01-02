import { Typography, ThemeProvider } from '@mui/material';
import { makeStyles } from '@mui/styles';
import theme from '../../helpers/ThemeProvider';
import BodyNav from './BodyNav';

const Body = () => {
    
    const useStyles = makeStyles({
        title: {
            width: '50%',
            height: '50vh',
            paddingLeft: '10rem',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }
    });
    
    const classes = useStyles()

    return (
        <div>
            <ThemeProvider theme={theme}>
                <Typography className={classes.title} variant='h5' color='#A19072'>
                    If you don't have money, you can't eat here. Don't worry, you're still loved by someone just not us
                </Typography>
            </ThemeProvider>
            <BodyNav />
        </div>
    )
}

export default Body
