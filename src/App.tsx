import React, { useState } from 'react';
import { NavLink, Switch, Route } from 'react-router-dom';
import './App.scss';
import ProfilePic from './images/mugi.png';
import { ReactComponent as HomeIcon } from './images/home.svg';
import { ReactComponent as FavoriteIcon } from './images/heart.svg';
import Search from './images/search.png';
import Home from './Home';
import Profile from './Profile';


function App() {

  const [openDropdownMenu, setOpenDropdownMenu] = useState(false)

  return <div className="App">

    <header>
      <p className="title">Nyanstagram</p>
      <div className="search">
        <input />
        <button className="search_btn"><img src={Search} alt="search button" /></button>
      </div>
      <nav>
        <ul className="nav_images">
          <li><NavLink exact to="/"><HomeIcon /></NavLink></li>
          <li><NavLink to="/favorite"><FavoriteIcon /></NavLink></li>
          <li><button onClick={() => setOpenDropdownMenu(!openDropdownMenu)}>
              <img className="profile_img" src={ProfilePic} alt="profile" />
          </button></li>
          {openDropdownMenu &&
            <ul className="dropdown_menu">
              <li><NavLink to="/profile">Profile</NavLink></li>
              <li>Saved</li>
              <li>Settings</li>
              <li>Log Out</li>
            </ul>
          }
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
