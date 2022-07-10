import './App.css';
import { Route, Routes } from 'react-router-dom';
import ScreenA from './ScreenA';
import ScreenB from './ScreenB';
import ScreenC from './Screenc';
import ScreenD from './ScreenD';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<ScreenA />} />
        <Route path="/b" element={<ScreenB />} />
        <Route path="/c" element={<ScreenC message="This is screen C" />} />
        <Route path="/d/:userid" element={<ScreenD message="This is screen D" />} />
      </Routes>
    </div>
  );
}

export default App;
