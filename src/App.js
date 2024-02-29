import React from 'react';
import './App.css';
import {Home, Footer, Navbar} from './component'

function App() {
  return (
    <>
    <div className='app-nav'>
      <Navbar/>
    </div>

    <div className='app-content'>
      <Home/>
    </div>
    <div className='app-footer'>
      <Footer/>
    </div>

    </>
  );
}

export default App;
