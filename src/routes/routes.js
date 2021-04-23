import React from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { RoutePath } from '../constants';
import Home from '../pages/Home';
import About from '../pages/About';
import FindHr from '../pages/FindHR';
import MockInterview from '../pages/MockInterview';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';
import NotFound from '../pages/NotFound/NotFound';
import { PrivateRoute } from './PrivateRoutes';
import HrCatalog from '../components/HrList/HrCatalog';
import UserSignUpPage from '../pages/UserSignUpPage';
import HrSignUpPage from '../pages/HrSignUpPage';
import HrDashboard from '../pages/HrDashboard';
import UserDashboard from '../pages/UserDashboard';
import AdminDashboard from '../pages/AdminDashboard';
import SingleHrPage from '../pages/SingleHrPage';
import UpdateHrProfile from '../pages/UpdateHrProfile';

import Exam from '../pages/Exam';
import AddNewQuestions from '../pages/AddNewQuestions';
import PreviewQuestion from '../pages/PreviewQuestion';
import TotalUsers from '../pages/TotalUsers';
import HrProfile from '../pages/HrProfile';
import UserProfile from '../pages/UserProfile';
import AdminProfile from '../pages/AdminProfile';
import CompanyInterviewQuestion from '../pages/CompanyInterviewQuestion';

function Routes() {
  return (
    <div>
      <Switch>
        <Route path={RoutePath.home} exact component={Home} />
        <Route path={RoutePath.about} exact component={About} />
        <Redirect from={RoutePath.root} exact to={RoutePath.home} />

        <Route path={RoutePath.findHr} exact component={FindHr} />
        <Route
          path={RoutePath.mockInterview}
          exact
          component={withRouter(MockInterview)}
        />
        <Route
          path={RoutePath.interviewQuestions}
          exact
          component={CompanyInterviewQuestion}
        />
        <Route path={RoutePath.login} exact component={Login} />
        <Route path={RoutePath.signUp} exact component={SignUp} />
        <Route path={RoutePath.signUpUser} exact component={UserSignUpPage} />
        <Route path={RoutePath.signUpHr} exact component={HrSignUpPage} />
        <Route path={RoutePath.hrDashboard} exact component={HrDashboard} />
        <Route path={RoutePath.userDashboard} exact component={UserDashboard} />
        <Route path={RoutePath.admin} exact component={AdminDashboard} />

        {/** Specific ID or dynamic routes */}
        <Route path={RoutePath.specificHr} exact component={SingleHrPage} />

        <Route path={RoutePath.hrProfile} exact component={HrProfile} />
        <Route path={RoutePath.userProfile} exact component={UserProfile} />
        <Route path={RoutePath.adminprofile} exact component={AdminProfile} />

        <Route path={RoutePath.find} exact component={HrCatalog} />
        <Route path={RoutePath.startExam} exact component={Exam} />
        <Route
          path={RoutePath.adminAddQuestion}
          exact
          component={AddNewQuestions}
        />
        <Route
          path={RoutePath.questionPreview}
          exact
          component={PreviewQuestion}
        />

        <Route
          path={RoutePath.updateProfileHr}
          exact
          component={UpdateHrProfile}
        />
        <Route path={RoutePath.totalUsers} exact component={TotalUsers} />

        <PrivateRoute path='/path' component={PrivateRoute} />
        <Route path='*' component={NotFound} />
      </Switch>
    </div>
  );
}
export default Routes;
