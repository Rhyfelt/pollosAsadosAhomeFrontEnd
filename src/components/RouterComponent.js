import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Ordenes from '../screens/ordenes/Ordenes'
import Productos from '../screens/productos/Productos'
const RouterComponent = () => {
    return (
        <Router>
            <Switch>
                <Route path="/ordenes" component={Ordenes}/>
                <Route path="/productos" component={Productos}/>
            </Switch>
        </Router>
    )
}

export default RouterComponent
