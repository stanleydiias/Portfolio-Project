import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Main from './pages/Main'
import Contact from './pages/Contact'
import HeaderAbout from './pages/About-me/HeaderAbout'

const Routes = () => {
    return (
        <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Main} />
            <Route path="/contact" component={Contact} />
            
        </Switch>
        </BrowserRouter>
    )
}

export default Routes
