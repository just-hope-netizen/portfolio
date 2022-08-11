import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/footer';
import Header from './components/header';
import { ThemeContext } from './context/theme';
import Contact from './pages/contact';
import Home from './pages/home';
import Projects from './pages/projects';
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
          <Header switch={toggleTheme} checked={theme === 'dark'} />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Projects' element={<Projects />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/thanks' element={<Thanks />} />
          </Routes>
          <Footer />
        </div>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
