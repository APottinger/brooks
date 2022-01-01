import { Box, CssBaseline } from '@mui/material';
import backie from './images/brooks.jpg';
import useStyles from './styles';
import Navbar from './components/Navbar/Navbar';
/*import Body from './components/Body/Body';
import Footer from './components/Footer/Footer'; */

function App() {

  const classes = useStyles();

  return (
    <Box className={classes.main} sx={{
      backgroundImage: `url(${backie})`,
      backgroundSize: 'cover',
      height: '100vh',
      backgroundRepeat: 'no-repeat'
    }}>
      <CssBaseline />
      <Navbar />
      {/* <Body />
      <Footer /> */}
    </Box>
  );
}

export default App;
