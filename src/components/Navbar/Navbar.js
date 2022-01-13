import { Typography, Grid, Collapse } from '@mui/material';
import { useEffect, useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import useStyles from './styles';
import theme from '../../helpers/ThemeProvider';
import Drawer from './Drawer';

const Navbar = () => {
    
    const classes = useStyles();

    const [checked, setChecked] = useState(false);
  
    useEffect(() => {
      setChecked(true);
    }, []);
   
    return (
        <Collapse
        in={checked}
        {...(checked ? { timeout: 1000 } : {})}
        collapsedHeight={50}>
            <ThemeProvider theme={theme}>
                <Grid container className={classes.grid}>
                    <Grid item>
                        <Typography className={classes.title} color='#eeeef0' variant='h5'>
                            bäche
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Drawer />
                    </Grid>
                </Grid>
            </ThemeProvider>
        </Collapse>
    )
}

export default Navbar
