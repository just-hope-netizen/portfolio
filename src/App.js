import './App.css';
import Header from './components/header';
import { Routes, Route } from 'react-router-dom'
import Home from './pages/home';
import About from './pages/about';
import Projects from './pages/projects';
import Tools from './pages/tools';
import { ThemeContext } from './context/theme';
import { useState } from 'react';
import Contact from './pages/contact';
import Thanks from './pages/thanks';

function App() {
  const [theme, setTheme] = useState('light')

  function toggleTheme() {
    setTheme((curr) => curr === 'light' ? 'dark' : 'light')
  }
  return (
    <>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <div id={theme}>
          <Header switch={toggleTheme} checked={theme === 'dark'}/>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Projects' element={<Projects />} />
            <Route path='/tools' element={<Tools />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/thanks' element={<Thanks />} />
          </Routes>
        </div>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
