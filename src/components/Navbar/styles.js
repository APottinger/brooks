import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    grid: {
        paddingTop: '3rem',
        paddingLeft: '5rem',
        width: '400px',
        display: 'flex',
        justifyContent: 'space-between'
    },
    title: {
        position: 'sticky',
        letterSpacing: '1rem',
    },
    drawer: {
        backgroundColor: '#b59c82',
        padding: '5rem',
        height: '100vh',
        width: '20vw'
    },
    drawerIcon: {
        position: 'relative', 
        top: -5,
        backgrounColor: '#b59c82'
    }
})

export default useStyles;