import './App.css';
import './output.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LoginComponent from './routes/Login';
import SignupComponent from './routes/Signup';
import HomeComponent from './routes/Home';
import UploadSong from './routes/UploadSong';
import { useCookies } from 'react-cookie';
import MyMusic from './routes/MyMusic';
import songContext from "./contexts/songContext";
import {useState} from "react";
import Home from './routes/Home';
import LoginHome from './routes/LoggedInHome';



function App() {

  const [Cookie, setCookie] = useCookies(["token"]);
  //console.log(Cookie);
  const [currentSong, setCurrentSong] = useState(null);
  const [soundPlayed, setSoundPlayed] = useState(null);
  const [isPaused, setIsPaused] = useState(true);

  return (
    <div className="w-screen h-screen font-poppins">

      <BrowserRouter>

        {Cookie.token ? (
          // logged in routes
          <songContext.Provider
            value={{
              currentSong,
              setCurrentSong,
              soundPlayed,
              setSoundPlayed,
              isPaused,
              setIsPaused,
            }}
          >
            <Routes>
              <Route path="/" element={<div className='bg-blue-500'>hello</div>} />
              <Route path="/home" element={<LoginHome />} />
              <Route path="/uploadSong" element={<UploadSong />} />
              <Route path="/mymusic" element={<MyMusic />} />
              <Route path="*" element={<Navigate to="/home" />} />
              <></>
            </Routes>
          </songContext.Provider>

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