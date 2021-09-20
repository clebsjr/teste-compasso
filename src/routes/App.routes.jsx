import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { UserInfo } from '../pages/UserInfo'

function AppRoutes() {
    return (
        <Switch>
            <Route path='/:id' component={UserInfo} exact/>
        </Switch>
    )
}

export default AppRoutes
