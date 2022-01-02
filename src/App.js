import { Box, CssBaseline, Collapse } from '@mui/material';
import { useEffect, useState } from 'react';
import backie from './images/brooks.jpg';
import Navbar from './components/Navbar/Navbar';
import Body from './components/Body/Body';
/* import Footer from './components/Footer/Footer'; */

function App() {

    const [checked, setChecked] = useState(false);
  
    useEffect(() => {
      debugger
      setChecked(true);
    }, []);

  return (
    <Box sx={{position: 'relative', overflow: 'hidden', backgroundColor: '#445756'}} >
      <Box sx={{
        position: 'inherit',
        backgroundImage: `url(${backie})`,
        backgroundSize: 'cover',
        height: '105vh',
        backgroundRepeat: 'no-repeat',
        /* transition: 'height 3s',
        '&:hover': {
          height: '100vh'
        } */
      }}> 
        <CssBaseline />
        <Collapse
        in={checked}
        {...(checked ? { timeout: 1000 } : {})}
        collapsedHeight={50}
      >
        <Navbar />
        </Collapse>
        <Body />
        {/* <Footer /> */}
      </Box>
      
    </Box>
  );
}

export default App;
