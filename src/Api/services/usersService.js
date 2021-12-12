import http from '../http-common';

class UsersService {
  login(email, password) {
    return http.post(`/users/login?email=${email}&password=${password}`, {
      email,
      password
    });
  }
  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
  }
  registerEmployee({ username, email, password }) {
    return http.post('/users/register', {
      username,
      email,
      password
    });
  }

  getCv(userid) {
    return http.get(`/users/user/cv?userid=${userid}`);
  }
}

// file directory: http://localhost:8080/images/1619684179709Acceptance%20Letter.pdf

export default new UsersService();
