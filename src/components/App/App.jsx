import React from 'react';
import axios from 'axios';
import './App.css';
import Comments from '../Comments/Comments.jsx';
import Supported from '../Supported/Supported.jsx';
import Understanding from '../Understanding/Understanding.jsx';
import Feeling from '../Feeling/Feeling.jsx';

function App() {

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
      <nav>

      </nav>
      <Comments />
      <Supported />
      <Understanding />
      <Feeling />
    </div>
  );
}

export default App;
