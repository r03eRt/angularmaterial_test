var app = angular.module('StarterApp', ['ngMaterial']);

app.config(function( $mdIconProvider ){

  // Register the user `avatar` icons
  $mdIconProvider.defaultIconSet("assets/img/avatars.svg", 128)
});