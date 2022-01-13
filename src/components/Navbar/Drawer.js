import { useState } from 'react';
import { Typography, ThemeProvider, IconButton, Box, SwipeableDrawer, List, ListItem, ListItemText, Divider } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import useStyles from './styles';
import theme from '../../helpers/ThemeProvider';

const Drawer = () => {

    const classes = useStyles();

    const [open, setOpen] = useState(false);

    return (
        <div>
            <IconButton className={classes.drawerIcon}
                aria-label='open drawer'
                size='medium'
                onClick={() => setOpen(true)} 
                >
                <MenuIcon />
            </IconButton>
            <ThemeProvider theme={theme}>
                <SwipeableDrawer
                transitionDuration={{ enter: 1000, exit: 1000 }}
                anchor='right'
                open={open}
                onClose={() => setOpen(false)}
                >
                    <div className={classes.drawer}>
                        <Box textAlign='center'>
                            <Typography variant='h4'>Components</Typography>
                        </Box>
                        <Divider />
                        <List>
                            <ListItem button onClick={() => {}}>
                                <ListItemText primary={'About'} />
                            </ListItem>
                            <ListItem button onClick={() => {}}>
                                <ListItemText primary={'About'} />
                            </ListItem>
                            <ListItem button onClick={() => {}}>
                                <ListItemText primary={'About'} />
                            </ListItem>
                            <ListItem button onClick={() => {}}>
                                <ListItemText primary={'About'} />
                            </ListItem>
                        </List>
                    </div>
                </SwipeableDrawer>
            </ThemeProvider>

        </div>
    )
}

export default Drawer
