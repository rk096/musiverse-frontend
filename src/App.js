import './App.css';
import './output.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LoginComponent from './routes/Login';
import SignupComponent from './routes/Signup';


function App() {
  return (
    <div className="w-screen h-screen font-poppins">
      <BrowserRouter>
        <Routes>
          <Route path="/hi" element={<div className='bg-blue-500'>hello</div>}/>
          <Route path="/login" element={<LoginComponent/>} />
          <Route path="/signup" element={<SignupComponent/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;