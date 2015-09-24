experts.controller('AnswersCtrl', function AnswersCtrl($scope, $stateParams, UsersFactory, UtilitiesFactory) {
  $scope.question = UtilitiesFactory.findById(UsersFactory.questions, $stateParams.questionId);
  $scope.addAnswer = function() {
    $scope.question.answer.push({answer: $scope.answerTitle}, {response: $scope.answerResponse});
    $scope.answerTitle = null;
    $scope.answerResponse = null;
  };
});
