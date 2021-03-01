import React from "react";
import {Switch, Route,Redirect}  from "react-router-dom"
import { RoutePath} from "../../constants"
import { Home, About, Jobs, Registration } from "../views"



function Routes(){
return(
      <div>
            <Switch>
              <Route
                path={RoutePath.home}
                exact
                component={Home}
              />
              <Route
                path={RoutePath.jobs}
                exact
                component={Jobs}
              />
              <Route
                path={RoutePath.about}
                exact
                component={About}
              />
              <Route path={RoutePath.registration} exact component={Registration} />
              <Route path={RoutePath.home} exact>
                <HomeView />
              </Route>
              <Redirect from={RoutePath.root} exact to={RoutePath.home} />
            </Switch>
          </div>
)




}
export default Routes;