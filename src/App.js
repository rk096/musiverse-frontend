import './App.css';
import './output.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LoginComponent from './routes/Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/hi" element={<div className='bg-blue-500'>get lost</div>}/>
          <Route path="/login" element={<LoginComponent/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;