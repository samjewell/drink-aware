app.controller('MainController', ['$scope', function($scope) {
  $scope.conditions = [
    {
      name: 'Mental Health',
      para1: 'Alcohol is a depressant, so it can make your moods low. Therefore it is very easy to slip into a vicious cycle of drinking to depress your feelings when actually the drink is making you feel worse.',
      para2: 'Depression, anxiety, stress, low mood and trouble sleeping are common when people drink high levels of alcohol.',
      icon: 'img/mental-health.jpg'
    },
    {
      name: 'Skin Problems',
      para1: 'Skin ProblemsSkin ProblemsSkin ProblemsSkin ProblemsSkin ProblemsSkin ProblemsSkin ProblemsSkin Problems',
      para2: 'Skin ProblemsSkin ProblemsSkin ProblemsSkin Problems',
      icon: 'img/skin-problems.jpg'
    },
    {
      name: 'Hypertension',
      para1: 'Alcohol is a depressant, so it can make your moods low. Therefore it is very easy to slip into a vicious cycle of drinking to depress your feelings when actually the drink is making you feel worse.',
      para2: 'Depression, anxiety, stress, low mood and trouble sleeping are common when people drink high levels of alcohol.',
      icon: 'img/hypertension.jpg'
    },
    {
      name: 'Fatty Liver',
      para1: 'Fatty LiverFatty LiverFatty LiverFatty LiverFatty LiverFatty LiverFatty LiverFatty LiverFatty LiverFatty Liver',
      para2: 'Fatty LiverFatty LiverFatty LiverFatty Liver',
      icon: 'img/fatty-liver.jpg'
    }
  ];

	$scope.increase = function(index) {
		$scope.conditions[index].count += 1;
	}
	
	$scope.decrease = function(index) {
		$scope.conditions[index].count -= 1;
	}
    
}]);