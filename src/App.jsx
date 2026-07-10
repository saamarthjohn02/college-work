/*import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>Get started</h1>
          <p>
            Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
          </p>
        </div>
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>Documentation</h2>
          <p>Your questions, answered</p>
          <ul>
            <li>
              <a href="https://vite.dev/" target="_blank">
                <img className="logo" src={viteLogo} alt="" />
                Explore Vite
              </a>
            </li>
            <li>
              <a href="https://react.dev/" target="_blank">
                <img className="button-icon" src={reactLogo} alt="" />
                Learn more
              </a>
            </li>
          </ul>
        </div>
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Connect with us</h2>
          <p>Join the Vite community</p>
          <ul>
            <li>
              <a href="https://github.com/vitejs/vite" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                GitHub
              </a>
            </li>
            <li>
              <a href="https://chat.vite.dev/" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#discord-icon"></use>
                </svg>
                Discord
              </a>
            </li>
            <li>
              <a href="https://x.com/vite_js" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#x-icon"></use>
                </svg>
                X.com
              </a>
            </li>
            <li>
              <a href="https://bsky.app/profile/vite.dev" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#bluesky-icon"></use>
                </svg>
                Bluesky
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
*/
 /*function App(){
  let name = "Saamarth"
  return(
    <>
     <h1>total is {2+2}</h1>
    <p>your name is {name}</p>
  </>
  )  
}
  */
/*







import React from "react";
import Footer from "./Components/Footer";
// import './std.css'
// add your own css
export default class Ap extends React.Component {
  render() {
    let name ="Saamarth"
    // let deco  <h1 style ={{color :"red",backgroundColor:"pink"}}>Hello {name}</h1>// external css
    return (
     

      <div>
        <Header />
        <Footer />
      </div>
    );
  }
}
import React from "react";
import Header from "./component/Header";
import Footer from "./component/Footer";
// import "./std.css";

export default class App extends  React.Component {
  render() {
    let deco={"color":"red",backgroundColor:"#000000"}
    let name = "Saamarth"
    return(
      <>
        <Header/>
        <Portal/>
        <h1 style={deco}> person name is {name} </h1>
        <Footer/>
      </>
      )
      }
      }*/
/*import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./component/Header";
import Dashboard from "./component/Dashboard";
import About from "./component/About";
import Products from "./component/product";
import Contact from "./component/contact";
import Error from "./component/error";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<products />} />
        <Route path="/contact" element={<contact />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
import LandingPage from "./pages/LandingPage";

function App() {
  return <LandingPage />;
}

export default App;*/
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import StudentLogin from "./pages/StudentLogin";
import TeacherLogin from "./pages/TeacherLogin";
import StudentRegister from "./pages/StudentRegister";
import TeacherRegister from "./pages/TeacherRegister";
import StudentDashboard from "./pages/StudentDashboard";
import TeacherDashboard from "./pages/TeacherDashboard";
import UploadNotes from "./pages/UploadNotes";
import Notes from "./pages/Notes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/student-login" element={<StudentLogin />} />
        <Route path="/teacher-login" element={<TeacherLogin />} />
        <Route path="/student-register" element={<StudentRegister/>}/>
        <Route path="/teacher-register" element={<TeacherRegister/>}/>
        <Route path="/student-dashboard" element={<StudentDashboard />} />
        <Route path="/teacher-dashboard" element={<TeacherDashboard />} />
        <Route path="/upload-notes" element={<UploadNotes />} />
        <Route path="/notes" element={<Notes />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
/*import State from "./component/State";

function App() {
  return (
    <>
      <State />
    </>
  );
}

export default App;*/
/*import Conditional from "./component/Conditional";

function App() {
  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "100px",
      }}
    >
      <Conditional />
    </div>
  );
}

export default App;*/
/*import React from 'react';
import Login from './component/Login';

function App() {
  return (
    <div>
      <Login />
    </div>
  );
}

export default App;*/
/*import React from "react";
import GetData from "./component/GetData";

function App() {
  return (
    <div>
      <h1>User Data</h1>
      <GetData />
    </div>
  );
}

export default App;*/