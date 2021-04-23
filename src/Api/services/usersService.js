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
}

export default new UsersService();
