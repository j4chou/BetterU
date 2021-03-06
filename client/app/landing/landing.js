angular.module('myApp.landing', [])
  .controller('LandingCtrl', function ($rootScope, $scope, $state, $uibModal, $cookies) {
    $rootScope.hideit = true
    $rootScope.landing = true
    $rootScope.loggedIn = $cookies.get('token')
    $rootScope.signin = function () {
      $scope.signin()
    }

    $scope.animationsEnabled = true

    $scope.signup = function () {
      $uibModal.open({
        animation: $scope.animationsEnabled,
        templateUrl: 'app/signup/signup.html',
        controller: 'SignupCtrl'
      })

    }

    $scope.signin = function () {
      $uibModal.open({
        animation: $scope.animationsEnabled,
        templateUrl: 'app/signin/signin.html',
        controller: 'SigninCtrl'
      })
    }
  })
