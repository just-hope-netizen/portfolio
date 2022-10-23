import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/footer';
import Header from './components/header';
import { ThemeContext } from './helpers/context';
import Admin from './pages/admin';
import Contact from './pages/contact';
import Home from './pages/home';
import Projects from './pages/projects';
import Thanks from './pages/thanks';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import Edit from './pages/Edit';



function App() {
  const [theme, setTheme] = useState('light')
  const queryClient = new QueryClient()
  
  function toggleTheme() {
    setTheme((curr) => curr === 'light' ? 'dark' : 'light')
  }



  return (
    <>
    <QueryClientProvider client={queryClient}>

        <ThemeContext.Provider value={{ theme, toggleTheme }}>
          <div id={theme}>
            <Header
            />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/Projects' element={<Projects />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='/thanks' element={<Thanks />} />
              <Route path='/admin' element={<Admin />} />
              <Route path='/Edit' element={<Edit />} />
            </Routes>
            <Footer />
          </div>
        </ThemeContext.Provider>
      </QueryClientProvider>

    </>
  );
}

export default App;
