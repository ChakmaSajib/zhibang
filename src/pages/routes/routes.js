import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { RoutePath } from '../../constants';
import {
  HomeView,
  AboutView,
  JobsView,
  RegistrationView,
  SignInView,
  HelpView
} from '../views';

function Routes() {
  return (
    <div>
      <Switch>
        <Route path={RoutePath.jobs} exact component={JobsView} />
        <Route path={RoutePath.about} exact component={AboutView} />
        <Route
          path={RoutePath.registration}
          exact
          component={RegistrationView}
        />
        <Route path={RoutePath.signIn} exact component={SignInView} />
        <Route path={RoutePath.help} exact component={HelpView} />
        <Route path={RoutePath.home} exact>
          <HomeView />
        </Route>
        <Redirect from={RoutePath.root} exact to={RoutePath.home} />
      </Switch>
    </div>
  );
}
export default Routes;
