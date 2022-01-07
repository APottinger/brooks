import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    grid: {
        paddingTop: '3rem',
        paddingLeft: '7rem',
        width: 'calc(100% + 80px)',
        display: 'flex',
        justifyContent: 'flex-start'
    },
    title: {
        position: 'sticky',
        letterSpacing: '1rem',
    }
})

export default useStyles;