import * as React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Layout from './components/Layout';
import Home from './components/Home';
import Sale from './components/Pages/Sale';
import Bottoms from './components/Pages/Bottoms';
import Collection from './components/Pages/Collections';
import Dupattas from './components/Pages/Dupatas';
import Pret from './components/Pages/Pret';
import Unstitched from './components/Pages/Unstitched';

import './custom.css';

export default () => (
    <BrowserRouter>
      <Switch>
      <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/sale' component={Sale} />
        <Route path='/collections' component={Collection} />
        <Route path='/unstitched' component={Unstitched} />
        <Route path='/pret' component={Pret} />
        <Route path='/dupattas' component={Dupattas} />
        <Route path='/bottoms' component={Bottoms} />
        </Layout>
      </Switch>
    </BrowserRouter>
);
