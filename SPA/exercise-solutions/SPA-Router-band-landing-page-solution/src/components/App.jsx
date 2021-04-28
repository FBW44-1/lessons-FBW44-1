import React from 'react';
import '../sass/App.scss';
import Navigation from './Navigation';
import Ozzy from './Ozzy';
import Tony from './Tony';
import Geezer from './Geezer';
import Bill from './Bill';
import Band from './Band';
import NotFound from './NotFound';
import { Switch, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

function App() {
  const location = useLocation();

  return (
    <div className='app'>
      <Navigation />
      <main>
        <AnimatePresence exitBeforeEnter>
          <Switch location={location} key={location.pathname}>
            <Route exact path='/vocals' component={Ozzy} />
            <Route exact path='/guitar' component={Tony} />
            <Route exact path='/bass' component={Geezer} />
            <Route exact path='/drums' component={Bill} />
            <Route exact path='/' component={Band} />
            <Route path='*' component={NotFound} />
          </Switch>
        </AnimatePresence>
      </main>
    </div>
  );
}

export default App;
