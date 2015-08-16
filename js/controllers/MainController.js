app.controller('MainController', ['$scope', function($scope) {
  $scope.activeCondition = 0;
  
  $scope.conditions = [
    {
      name: 'Mental Health',
      para1: 'Alcohol is a depressant, so it can make your moods low. Therefore it is very easy to slip into a vicious cycle of drinking to depress your feelings when actually the drink is making you feel worse.',
      para2: 'Depression, anxiety, stress, low mood and trouble sleeping are common when people drink high levels of alcohol.',
      icon: 'assets/mental-health@2x.png'
    },
    {
      name: 'Skin Problems',
      para1: 'Skin ProblemsSkin ProblemsSkin ProblemsSkin ProblemsSkin ProblemsSkin ProblemsSkin ProblemsSkin Problems',
      para2: 'Skin ProblemsSkin ProblemsSkin ProblemsSkin Problems',
      icon: 'assets/skin-problems@2x.png'
    },
    {
      name: 'Neuropathy',
      para1: 'Alcohol is a depressant, so it can make your moods low. Therefore it is very easy to slip into a vicious cycle of drinking to depress your feelings when actually the drink is making you feel worse.',
      para2: 'Depression, anxiety, stress, low mood and trouble sleeping are common when people drink high levels of alcohol.',
      icon: 'assets/neuropathy@2x.png'
    }
  ];
}]);