import React, { Fragment, lazy, Suspense, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './Pages/Home/index';
// import List from './Pages/List/index';

const List = lazy(() => import('./Pages/List/index'));


const App: React.FC = () => {

    console.log('hello');

    return (
        <Fragment>
            <Router>
                <Switch>
                    <Suspense fallback={<div>Loading...</div>}>
                        <Route path='/' exact component={Home} />
                        <Route path='/list' component={List} />
                    </Suspense>
                </Switch>
            </Router>
        </Fragment>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));