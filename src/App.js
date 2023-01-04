import {
  useQuery
} from '@tanstack/react-query';
import { collection, getDocs } from 'firebase/firestore';
import { useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/footer';
import Header from './components/header';
import { db } from './config/firestore';
import { ThemeContext } from './helpers/context';
import Admin from './pages/admin';
import Contact from './pages/contact';
import Edit from './pages/admin/Edit';
import Home from './pages/home';
import Projects from './pages/projects';
import Thanks from './pages/thanks';
import Add from './pages/admin/add';



function App() {

  const [theme, setTheme] = useState('light')


  const { isLoading, error } = useQuery(['projects'], () =>

    getDocs(collection(db, 'projects')).then(res =>
      res.docs.map(doc => ({ ...doc.data(), id: doc.id })))

  );


  if (isLoading) return <div className='spinner'>
    <Spinner animation="grow" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  </div>

  if (error) return 'An error has occurred: ' + error.message;




  function toggleTheme() {
    setTheme((curr) => curr === 'light' ? 'dark' : 'light')
  }
  return (
    <>

      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <div id={theme}>
          <Header
          />
          <Routes>
            <Route path='' element={<Home />} />
            <Route path='Projects' element={<Projects />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/thanks' element={<Thanks />} />
            <Route path='Admin' element={<Admin />} />
            <Route path='Admin/add' element={<Add />} />
            <Route path='Admin/edit' element={<Edit />} />
          </Routes>
          <Footer />
        </div>
      </ThemeContext.Provider>

    </>
  );
}

export default App;
