import {Route, Routes} from 'react-router-dom';
import './App.css';

import NavBar from './components/Navbar';
import Participants from './components/Participants';

function App() {
  return (
    <>
      <NavBar/>
      <Routes>
        <Route exact path="/" element={<Participants sa={1} />} />
        <Route exact path="/#/results/single" element={<Participants sa={1} />} />
        <Route exact path="/#/results/average" element={<Participants sa={0} />} />
      </Routes>
    </>
  );
}
export default App;