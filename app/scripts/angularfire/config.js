angular.module('firebase.config', [])
  .constant('FBURL', 'https://remembro-f6216.firebaseio.com')
  .constant('SIMPLE_LOGIN_PROVIDERS', ['password','facebook'])

  .constant('loginRedirectPath', '/login');
