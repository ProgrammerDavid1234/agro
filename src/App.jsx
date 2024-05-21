import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Buy from './components/Buy';


import "./styles.css";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Purchase" element={<Buy />} />
      <Route path='/login' element={<Home />}/>
    </Routes>
  );
};

export default App;
