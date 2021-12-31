import { Box, CssBaseline } from '@mui/material';
import backie from './images/brooks.jpg';

function App() {
  return (
    <Box sx={{
      backgroundImage: `url(${backie})`,
      backgroundSize: 'cover',
      height: '100vh',
      backgroundRepeat: 'no-repeat'
    }}>
      <CssBaseline />

    </Box>
    
  );
}

export default App;
