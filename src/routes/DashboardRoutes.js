import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { HomeScreen } from '../screen/HomeScreen'
import { Explicacion } from '../component/tutorial/Explicacion'
import { Tutorial } from '../component/tutorial/Tutorial'
import { PromocionScreen } from '../screen/PromocionScreen'
import { Login } from '../auth/Login'

export const DashboardRoutes = () => {
    return (
        <>
            <div>
                <Switch>
                    <Route exact path='/tutorial' component={ Tutorial } />
                    <Route exact path='/explicacion' component={ Explicacion } />
                    <Route exact path='/home' component={ HomeScreen } />
                    <Route exact path='/promocion/:restaurante/:id' component={ PromocionScreen } />
                    <Route exact path='/auth/login' component={ Login } />

                    <Redirect to="/tutorial" />
                </Switch>
            </div>   
        </>
    )
}
