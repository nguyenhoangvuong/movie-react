import React from 'react';

import {Route , Switch} from 'react-router-dom';

import Home from '../pages/Home'
import Catalog from '../pages/Catalog'
import Details from '../pages/detail/Detail'

const Routes = () => {
    return (
        <div>
            <Switch>
                <Route 
                    path="/:category/search/:keyword"
                    component={Catalog}
                >
                </Route>
                <Route 
                    path="/:category/:id"
                    component={Details}
                >
                </Route>
                <Route 
                    path="/:category"
                    component={Catalog}
                >
                </Route>
                <Route 
                    exact
                    path="/"
                    component={Home}
                >
                </Route>
            </Switch>
        </div>
    );
}

export default Routes;
