import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    grid: {
        height: '70vh',
        display: 'flex',
        paddingLeft: '80px',
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

export default useStyles;