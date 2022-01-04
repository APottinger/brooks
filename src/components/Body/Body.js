import { Typography, ThemeProvider } from '@mui/material';
import { makeStyles } from '@mui/styles';
import theme from '../../helpers/ThemeProvider';

const Body = () => {
    
    const useStyles = makeStyles({
        title: {
            margin: 0,
            position: 'relative',
            letterSpacing: '0.25rem',
            top: '19rem',
            left: '16rem',
            width: '100vw',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }
    });
    
    const classes = useStyles()

    return (
        
            <ThemeProvider theme={theme}>
                <Typography className={classes.title} variant='h5' color='#b59c82'>
                    {/* quotes to be used: If you don't have money, you can't eat here. Don't worry, you're still loved by someone - just not us 
                    you get what you pay for so bring a ton of money 
                    we open when we open*/}
                    513 Lux Avenue - <em>Berlin, Germany</em>
                </Typography>
            </ThemeProvider>
    
    )
}

export default Body
