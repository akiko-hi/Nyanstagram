import React from 'react';
import './App.scss';
import ProfilePic from './images/mugi.png';
import Home from './images/home.png';
import Favorite from './images/heart.png';
import Search from './images/search.png';
import Posts from './Posts';
import AccountContainer from './AccountContainer';


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
          <li><img src={Home} alt="home" /></li>
          <li><img src={Favorite} alt="favorite" /></li>
          <li><img className="profile_img" src={ProfilePic} alt="profile" /></li>
        </ul>
      </nav>
    </header>

    <main>
      <div className="main_wrapper posts">
        <div className="videos_section">
          <div className="video_post">
            <img className="profile_img video" src={ProfilePic} alt="profile" />
            <p className="user_name">Amazing Mugi</p>
          </div>
        </div>

        <div className="posts_section">
          <Posts />


        </div>

      </div>

      <div className="main_wrapper side">
        <AccountContainer img="mugi.png" userName="AmazingMugi" caption="Mugi Hirai" />
        <div className="suggestions">
          <p>Suggestions For You</p>
          <button className="see_all_btn">See All</button>
        </div>
        <AccountContainer img="mugi.png" userName="AmazingMugi" caption="Mugi Hirai">
          <button className="follow_btn">Follow</button>
        </AccountContainer>
      </div>
    </main>
  </div>
}

export default App;
