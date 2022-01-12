import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Eat from './pages/Eat';

function App() {

  return (
    <>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/eat' element={<Eat />} />
      </Routes>
    </>
  );
}

export default App;
