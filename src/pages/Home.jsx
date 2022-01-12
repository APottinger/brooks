import { Box, CssBaseline } from '@mui/material';
import Navbar from '../components/Navbar/Navbar';
import BodyAddress from '../components/Body/BodyAddress';
import BodyNav from '../components/Body/BodyNav';
/* import Footer from './components/Footer/Footer'; */
import useStyles from './styles';

const Home = () => {

    const classes = useStyles();

    return (
        <Box className={classes.box}>
            <CssBaseline />
            <Box className={classes.boxItem}>
                <Navbar />
                <BodyAddress />
                <BodyNav />
            </Box>
        </Box>
    )
}

export default Home
