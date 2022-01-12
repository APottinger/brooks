import { makeStyles } from '@mui/styles';
import backie from '../images/coffee.jpg';

const useStyles = makeStyles({
    box: {
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: '#b59c82'
    },
    boxItem: {
        position: 'inherit',
        right: '25px',
        backgroundImage: `url(${backie})`,
        backgroundSize: 'cover',
        height: '100vh',
        backgroundRepeat: 'no-repeat',
    }
});

export default useStyles;