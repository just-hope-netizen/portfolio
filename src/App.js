import './App.css';
import Header from './components/header';
import { Routes, Route } from 'react-router-dom'
import Home from './pages/home';
import About from './pages/about';
import Projects from './pages/projects';
import Tools from './pages/tools';
function App() {
  return (
    <>
      <Header/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Projects' element={<Projects />} />
          <Route path='/tools' element={<Tools />} />
          <Route path='/about' element={<About />} />
        </Routes>
    </>
  );
}

export default App;
