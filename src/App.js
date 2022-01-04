import { Box, CssBaseline, Collapse } from '@mui/material';
import { useEffect, useState } from 'react';
import backie from './images/coffee.jpg';
import Navbar from './components/Navbar/Navbar';
import Body from './components/Body/Body';
import BodyNav from './components/Body/BodyNav';
/* import Footer from './components/Footer/Footer'; */
import useStyles from './styles';

function App() {

  //styling
    const classes = useStyles();

    //parallax
    const [checked, setChecked] = useState(false);
  
    useEffect(() => {
      setChecked(true);
    }, []);

  return (
    <Box className={classes.box} >
      <CssBaseline />
      <Box className={classes.boxItem}>
        <Box sx={{width: 'calc(100% + 40px)'}}>
        <Collapse
        in={checked}
        {...(checked ? { timeout: 1000 } : {})}
        collapsedHeight={50}>
          <Navbar />
        </Collapse>
        <Body />
        <BodyNav />
        </Box>
      </Box>
    
    </Box>
  );
}

export default App;
