import * as React from 'react';
import { Route } from 'react-router';
import Layout from './components/Layout';
import Home from './components/Home';

import './custom.css'

export default () => (
    <Layout>
        <Route exact path='/' component={Home} />
        {/* <Route path='/Sale' component={Banner} />
        <Route path='/counter' component={ImgSec} />
        <Route path='/counter' component={ImgSec2} />
        <Route path='/counter' component={Footer} /> */}
    </Layout>
);
