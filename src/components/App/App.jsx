import React, { useEffect } from 'react';
import { HashRouter as Router, Route} from 'react-router-dom';

import axios from 'axios';
import './App.css';

import Home from '../Home/Home.jsx';
import Feeling from '../Feeling/Feeling.jsx';
import Understanding from '../Understanding/Understanding.jsx';
import Support from '../Support/Support.jsx';
import Comments from '../Comments/Comments.jsx';
import Review from '../Review/Review.jsx';
import Success from '../Success/Success.jsx';

function App() {

  return (

    <div className='App'>

      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>

      <Router>

        <Route path="/" exact>
          <Home />
        </Route>

        <Route path="/feeling">
          <Feeling />
        </Route>

        <Route path="/understanding">
          <Understanding />
        </Route>

        <Route path="/support">
          <Support />
        </Route>

        <Route path="/comments">
          <Comments />
        </Route>

        <Route path="/review">
          <Review />
        </Route>

        <Route path="/success">
          <Success />
        </Route>

      </Router>

    </div>
  );
}

export default App;
