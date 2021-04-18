import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import auth from '../mock/auth';
// using react-redux
import { useSelector } from 'react-redux';

export const PrivateRoute = ({ component: Component, ...props }) => {
  //   const isAuthenticated = useSelector((state) => state.User.isLogin);
  return (
    <Route
      {...props}
      render={(props) => {
        if (auth.isAuthenticated()) {
          return <Component {...props} />;
        } else {
          return (
            <Redirect
              to={{
                pathname: '/login',
                state: {
                  from: props.location
                }
              }}
            />
          );
        }
      }}
    />
  );
};

// import React, { Component } from 'react'
// import { Route, Redirect } from 'react-router-dom'
// import auth from './auth-helper'

// const PrivateRoute = ({ component: Component, ...rest }) => (
//   <Route {...rest} render={props => (
//     auth.isAuthenticated() ? (
//       <Component {...props}/>
//     ) : (
//       <Redirect to={{
//         pathname: '/signin',
//         state: { from: props.location }
//       }}/>
//     )
//   )}/>
// )

// export default PrivateRoute

// import { signout } from './api-auth.js'

// const auth = {
//   isAuthenticated() {
//     if (typeof window == "undefined")
//       return false

//     if (sessionStorage.getItem('jwt'))
//       return JSON.parse(sessionStorage.getItem('jwt'))
//     else
//       return false
//   },
//   authenticate(jwt, cb) {
//     if (typeof window !== "undefined")
//       sessionStorage.setItem('jwt', JSON.stringify(jwt))
//     cb()
//   },
//   signout(cb) {
//     if (typeof window !== "undefined")
//       sessionStorage.removeItem('jwt')
//     cb()
//     //optional
//     signout().then((data) => {
//       document.cookie = "t=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"
//     })
//   },
//   updateUser(user, cb) {
//     if(typeof window !== "undefined"){
//       if(sessionStorage.getItem('jwt')){
//         let auth = JSON.parse(sessionStorage.getItem('jwt'))
//         auth.user = user
//         sessionStorage.setItem('jwt', JSON.stringify(auth))
//         cb()
//       }
//     }
//   }
// }

// export default auth

// const signin = (user) => {
//   return fetch('/auth/signin/', {
//       method: 'POST',
//       headers: {
//         'Accept': 'application/json',
//         'Content-Type': 'application/json'
//       },
//       credentials: 'include',
//       body: JSON.stringify(user)
//     })
//     .then((response) => {
//       return response.json()
//     }).catch((err) => console.log(err))
// }

// const signout = () => {
//   return fetch('/auth/signout/', {
//     method: 'GET',
//   }).then(response => {
//       return response.json()
//   }).catch((err) => console.log(err))
// }

// export {
//   signin,
//   signout
// }
