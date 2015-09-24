var experts = angular.module('Experts', ['ui.router']);

experts.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider.state('home', {
    url:"",
    templateUrl: "partials/home.html"
  });

  $stateProvider.state('questions', {
    url:"/questions",
    templateUrl:"partials/questions.html",
    controller:'QuestionsCtrl'
  });

  $stateProvider.state('answers', {
    url:"/answers",
    templateUrl:"partials/answers.html",
    controller:'AnswersCtrl'
  });

});
