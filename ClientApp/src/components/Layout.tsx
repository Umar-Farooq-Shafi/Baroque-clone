import * as React from 'react';

import NavMenu from './NavMenu';
import Footer from './Footer';

export default (props: { children?: React.ReactNode }) => (
    <React.Fragment>
        <NavMenu/>
        <div>
            {props.children}
        </div>
        <Footer />
    </React.Fragment>
);
