import './App.css';
import { Route, Routes } from 'react-router-dom';
import ScreenA from './ScreenA';
import ScreenB from './ScreenB';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<ScreenA />} />
        <Route path="/b" element={<ScreenB />} />
      </Routes>
    </div>
  );
}

export default App;
