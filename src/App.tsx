import React, { useEffect, useState } from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';
import { whoAmI } from './api';
import './App.scss';
import Home from './Home';
import { ReactComponent as FavoriteIcon } from './images/heart.svg';
import { ReactComponent as HomeIcon } from './images/home.svg';
import Search from './images/search.png';
import Profile from './Profile';
import { User } from './types';


function App() {

  const [openDropdownMenu, setOpenDropdownMenu] = useState(false)
  const [user, setUser] = useState<User | null>()

  useEffect(() => {
    load()

    async function load() {
      const res = await whoAmI()
      setUser(res)
    }
  }, [])

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
            <img className="profile_img" src={user?.profile_img} alt="profile" />
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
        <Route path="/user/:id">
          <UserPage />
        </Route>
      </Switch>
    </main>
  </div>
}

export default App;
