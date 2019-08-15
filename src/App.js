import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import GlobalStyles from './theme/GlobalStyles';
import LoadingScreenView from './views/LoadingScreenView';
import HeroView from './views/HeroView';
import NavigationView from './views/NavigationView';
import AboutMeView from './views/AboutMeView';
import './theme/animation.css';

class App extends Component {
  state = {};

  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <GlobalStyles />
        <LoadingScreenView />
        <NavigationView />
        <Route
          render={({ location }) => (
            <TransitionGroup>
              <CSSTransition key={location.key} classNames="fade" timeout={300}>
                <Switch location={location}>
                  <Route exact path="/" component={HeroView} />
                  <Route exact path="/about" component={AboutMeView} />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          )}
        />
      </Router>
    );
  }
}

export default App;
