import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import AllTrains from './components/AllTrains';
import Strain from './components/Strain';
function App() {
  return (
    <BrowserRouter>
    <div>
        <Routes>
          <Route exact path="/" element={<AllTrains/>} />
          <Route exact path="/specifictrain" element={<Strain/>} />
        </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
