import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import AllTrains from './components/AllTrains';

function App() {
  return (
    <BrowserRouter>
    <div>
        <Routes>
          <Route exact path="/" element={<AllTrains/>} />
        </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
