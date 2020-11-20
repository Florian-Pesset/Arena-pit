import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { GladiatorProvider } from './context/GladiatorPovider';
import { WalletProvider } from './context/WalletProvider';

import LayoutedView from './layout/Layout';
import Home from './views/Home';
import FighterDetails from './views/FighterDetails';
import WeekFights from './views/WeekFights';
import About from './views/About';

function Router() {
  return (
    <BrowserRouter>
      <WalletProvider>
        <GladiatorProvider>
          <LayoutedView>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/fighterdetails/:id" component={FighterDetails} />
              <Route path="/fights" component={WeekFights} />
              <Route path="/about" component={About} />
            </Switch>
          </LayoutedView>
        </GladiatorProvider>
      </WalletProvider>
    </BrowserRouter>
  );
}

export default Router;
