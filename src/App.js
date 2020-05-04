import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { Route, Redirect } from 'react-router-dom';
import HomeContainer from './components/Home/HomeContainer';
import Footer from './components/Footer/Footer';
import About from './components/About/About';

function App() {
  return (
    <div className='app'>
      <Navbar/>
      <div className="wrapper">
        <div className='container'>
          <Route path='/' render={ ()=> <Redirect to={"/home"}/>} />
          <Route path='/home' render={()=> <HomeContainer/>}/>
          <Route path='/something' render={()=> <About/>}/>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
