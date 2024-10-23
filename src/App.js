
import './App.css';
import { Route, Routes, Navigate} from 'react-router-dom';
import { Twitter } from './twitter';
import { HashRouter } from 'react-router-dom';

function App() {
  return (
    <HashRouter>
      <div className="container">
        <Routes>
            <Route path="/" element={<Navigate to="/twitter"/>}/>
            <Route path="/twitter/*" element={<Twitter/>}/>
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
