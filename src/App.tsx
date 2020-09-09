import React from 'react';
import { NavLink, Switch, Route } from 'react-router-dom';
import './App.scss';
import ProfilePic from './images/mugi.png';
import HomeIcon from './images/home.png';
import Favorite from './images/heart.png';
import Search from './images/search.png';
import Home from './Home';
import Profile from './Profile';


function App() {


  return <div className="App">

    <header>
      <p className="title">Nyanstagram</p>
      <div className="search">
        <input />
        <button className="search_btn"><img src={Search} alt="search button" /></button>
      </div>
      <nav>
        <ul className="nav_images">
          <li><button><NavLink to="/"><img src={HomeIcon} alt="home" /></NavLink></button></li>
          <li><button><img src={Favorite} alt="favorite" /></button></li>
          <li><button><NavLink to="/profile"><img className="profile_img" src={ProfilePic} alt="profile" /></NavLink></button></li>
        </ul>
      </nav>
    </header>


    <main>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
      </Switch>
    </main>
  </div>
}

export default App;
