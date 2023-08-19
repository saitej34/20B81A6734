import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
    <div>
        <Routes>
          <Route exact path="/" element={<AllTrains/>} />
          <Route exact path="/train/:id" element={<Login />} />
        </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
