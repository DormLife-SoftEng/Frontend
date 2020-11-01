import React from "react";
import {useAuth , authContextType} from "../../contexts/auth.context"
import { Redirect, Route } from "react-router-dom"
import {RouteProp } from "../type"

const DormFinderRoute = (props : RouteProp) => {
    const {authToken}  : authContextType  = useAuth()
    const {path , Component} = props
    const routeComponent : any = () => {
        //return authToken && authToken.role === "general" ? <Component /> : <Redirect to="/signin" />
        return <Component />
    }
    return <Route component={routeComponent} exact path={path} />
}

export default DormFinderRoute;