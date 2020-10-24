import React from "react";
import {useAuth} from "../../contexts/auth.context"
import { Redirect, Route } from "react-router-dom"
import {RouteProp } from "../type"

const AuthRoute = (props : RouteProp) => {
    const {authToken} = useAuth()
    const {path , Component} = props
    const routeComponent : any = () => {
        return !authToken ? <Component /> : <Redirect to="/" />
    }
    return <Route component={routeComponent} exact path={path} />
}

export default AuthRoute;