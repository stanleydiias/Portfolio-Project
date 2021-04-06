import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Main from './pages/Main'
import AboutMe from './pages/About-me'
import Contact from './pages/Contact'

const Routes = () => {
    return (
        <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Main} />
            <Route path="/contact" component={Contact} />
            <Route path="/about-me" component={AboutMe} />
        </Switch>
        </BrowserRouter>
    )
}

export default Routes
