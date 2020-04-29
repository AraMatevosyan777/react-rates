import React from 'react';
import Navbar from './components/Navbar/Navbar';
import { Route, Redirect } from 'react-router-dom';
import HomeContainer from './components/Home/HomePage/HomeContainer';
import Footer from './components/Footer/Footer';
import About from './components/About/About';

function App() {
  return (
    <div >
      <Navbar/>
      <div className='container min-vh-100'>
        <Route path='/' render={ ()=> <Redirect to={"/home"}/>} />
        <Route path='/home' render={()=> <HomeContainer/>}/>
        <Route path='/something' render={()=> <About/>}/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
