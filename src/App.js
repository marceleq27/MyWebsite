import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { ParallaxProvider } from 'react-scroll-parallax';
import GlobalStyles from './theme/GlobalStyles';
import './theme/animation.css';
import LoadingScreenView from './views/LoadingScreenView';
import HeroView from './views/HeroView';
import NavigationView from './views/NavigationView';
import AboutMeView from './views/AboutMeView';
import InformationView from './views/InformationView';
import ContactView from './views/ContactView';
import font from './theme/fonts';

class App extends Component {
  state = {};

  render() {
    return (
      <ThemeProvider theme={font}>
        <ParallaxProvider>
          <Router basename={process.env.PUBLIC_URL}>
            <GlobalStyles />
            <LoadingScreenView />
            <NavigationView />
            <Route
              render={({ location }) => (
                <TransitionGroup>
                  <CSSTransition key={location.key} classNames="fade" timeout={500}>
                    <Switch location={location}>
                      <Route exact path="/" component={HeroView} />
                      <Route path="/information" component={InformationView} />
                      <Route path="/about" component={AboutMeView} />
                      <Route path="/contact" component={ContactView} />
                    </Switch>
                  </CSSTransition>
                </TransitionGroup>
              )}
            />
          </Router>
        </ParallaxProvider>
      </ThemeProvider>
    );
  }
}

export default App;
