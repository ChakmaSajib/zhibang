const fakeAuth = {
  isLoggedIn: false,
  onAuthentication() {
    this.isLoggedIn = true;
  },
  getLoginStatus() {
    return this.isLoggedIn;
  },

  signOut() {
    this.isLoggedIn = false;
  }
};

export default { fakeAuth };
