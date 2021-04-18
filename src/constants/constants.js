export const RoutePath = {
  root: '/',
  home: '/app',
  about: '/about',
  findHr: '/hr',
  specificHr: '/hr/:id',
  mockInterview: '/mock',
  interviewQuestions: '/questions',
  login: '/signin',
  signUp: '/signup',
  signUpHr: '/signup/hr',
  signUpUser: '/signup/user',
  help: '/help',
  hrSignup: '/hrsignup',
  dashboard: '/dashboard',
  userDashboard: '/userdashboard',
  hrDashboard: '/hrdashboard',
  admin: '/admin',
  profile: '/profile',
  find: '/findhr',
  notify: '/notify',
  updateProfileHr: '/updateprofile',
  startExam: '/exam',
  addQuestion: '/add',
  questionPreview: '/preview'
};

export const alertConstants = {
  SUCCESS: 'ALERT_SUCCESS',
  ERROR: 'ALERT_ERROR',
  CLEAR: 'ALERT_CLEAR'
};

export const userConstants = {
  REGISTER_REQUEST: 'USERS_REGISTER_REQUEST',
  REGISTER_SUCCESS: 'USERS_REGISTER_SUCCESS',
  REGISTER_FAILURE: 'USERS_REGISTER_FAILURE',

  LOGIN_REQUEST: 'USERS_LOGIN_REQUEST',
  LOGIN_SUCCESS: 'USERS_LOGIN_SUCCESS',
  LOGIN_FAILURE: 'USERS_LOGIN_FAILURE',

  LOGOUT: 'USERS_LOGOUT',

  GETALL_REQUEST: 'USERS_GETALL_REQUEST',
  GETALL_SUCCESS: 'USERS_GETALL_SUCCESS',
  GETALL_FAILURE: 'USERS_GETALL_FAILURE',

  DELETE_REQUEST: 'USERS_DELETE_REQUEST',
  DELETE_SUCCESS: 'USERS_DELETE_SUCCESS',
  DELETE_FAILURE: 'USERS_DELETE_FAILURE'
};

export const COLORS = {
  // Base colors
  primaryBlack: '#39424e',
  seconPrimaryBlack: '#1ba94c',

  // colors
  black: '#1E1B26',
  white: '#FFFFFF'
};

export const SIZES = {
  // Global sizes
  base: 8,
  font: 14,
  padding: 24,
  padding2: 36,

  // Flag icon size
  flag: 0.3,

  // Dashbord / upgrade icon size
  upgrade: 40,

  // Font sizes
  largeTitle: 50,
  h1: 30,
  h2: 22,
  h3: 16,
  h4: 14,
  body1: 30,
  body2: 20,
  body3: 16,
  body4: 14
};

const appTheme = { COLORS, SIZES };
export default appTheme;
