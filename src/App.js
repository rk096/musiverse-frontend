import './App.css';
import './output.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LoginComponent from './routes/Login';
import SignupComponent from './routes/Signup';
import HomeComponent from './routes/Home';
import LoggedInHomeComponent from './routes/LoggedInHome';
import UploadSong from './routes/UploadSong';
import { useCookies } from 'react-cookie';

function App() {

  const [Cookie, setCookie] = useCookies(["token"]);
  console.log(Cookie);

  return (
    <div className="w-screen h-screen font-poppins">

      <BrowserRouter>

        {Cookie.token ? (
          // logged in routes
          <Routes>
            <Route path="/" element={<div className='bg-blue-500'>hello</div>} />
            <Route path="/home" element={<LoggedInHomeComponent />} />
            <Route path="/uploadSong" element={<UploadSong/>} />
            <Route path="*" element={<Navigate to="/home" />} />
            <></>
          </Routes>

        ) : (
          // logged out routes
          <Routes>
            <Route path="/home" element={<HomeComponent />} />
            <Route path="/login" element={<LoginComponent />} />
            <Route path="/signup" element={<SignupComponent />} />
            <Route path="*" element={<Navigate to="/login" />} />
          </Routes>
        )
        }
      </BrowserRouter>
    </div>
  );
}

export default App;