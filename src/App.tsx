import React from 'react';
import './App.scss';
import Posts from './Posts';


function App() {
  return <div className="App">

    <header>
      <p>Nyanstagram</p>
      <input />
      <div>images</div>
    </header>

    <main>
      <div className="main_wrapper posts">
        <div className="videos_section">videos</div>

        <div className="posts_section">
          <Posts />

          
        </div>

      </div>

      <div className="main_wrapper">
        <div>my account</div>
        <div>suggestions</div>
      </div>
    </main>
  </div >
}

export default App;
