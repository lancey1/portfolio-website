import {Routes, Route, Navigate } from "react-router-dom";
import {useState,useEffect} from "react"
import Navbar from "./shared/Navbar";
import About from "./pages/About";
// import Home from "./pages/Home";
import Projects from "./pages/Projects";
import './App.css';

export default function App() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    fetch('https://gitconnected.com/v1/portfolio/lancey1')
      .then(res => res.json())
      .then(user => {
        console.log('success')
        setUser(user);
      });
  }, []);
  if (!user) {
    return <div />;
  }

  return (
    <main>
     <Navbar />
     <Routes>
        <Route exact path="/about" element={<About user={user}/>} />
        <Route exact path="/" element={<About user={user}/>} />
        {/* <Route exact path="/" element={<Home user={user}/>} /> */}
        <Route exact path="/projects" element={<Projects user={user} />} />
        <Route path="*" element={<Navigate to="/about"/>} />
      </Routes>
    </main>
  );
}
