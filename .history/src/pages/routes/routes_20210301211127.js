import React from "react";
import {Switch, Route,Redirect}  from "react-router-dom"
import { RoutePath} from "../../constants"
import { HomeView, AboutView, JobsView, RegistrationView } from "../views"



function Routes(){
return(
      <div>
            <Switch>
              <Route
                path={RoutePath.home}
                exact
                component={HomeView}
              />
              <Route
                path={RoutePath.JobsView}
                exact
                component={Jobs}
              />
              <Route
                path={RoutePath.about}
                exact
                component={AboutView}
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