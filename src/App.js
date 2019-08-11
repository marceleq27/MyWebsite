import React, { Component } from 'react';
import CanvasDots from 'components/CanvasDots/CanvasDots';
import GlobalStyles from './theme/GlobalStyles';
import LoadingScreenView from './views/LoadingScreenView';
import HeroView from './views/HeroView';
import NavigationView from './views/NavigationView';

class App extends Component {
  state = {};

  render() {
    return (
      <>
        <GlobalStyles />
        <LoadingScreenView />
        <NavigationView />
        <HeroView />
        {/* <ScrollableAnchor id="section2">
          <section className="panel turqoise">
            <p>Lorem ipsum dolor sit amet</p>
          </section>
        </ScrollableAnchor>
        <section className="panel green">
          <p>Lorem ipsum dolor sit amet</p>
        </section>

        <section className="panel bordeaux">
          <p>Lorem ipsum dolor sit amet</p>
        </section> */}
        <CanvasDots />
      </>
    );
  }
}

export default App;
