angular
.module("Page", [])
.controller('Controller', ['$scope', function($scope) {
  $scope.activeCondition = -1;
  
  $scope.conditions = [
    {
      name: 'Mental Illness',
      para1: 'Alcohol is a depressant so can cause your mood to become low. It is very easy to slip into a cycle of drinking to depress your feelings which actually is making your depression worse.',
      para2: 'Depression, anxiety, stress, low mood and trouble sleeping are common when people drink high levels of alcohol. Speak to the nursing team if you are worried about any of these issues.',
      icon: 'assets/icons/MentalIllness@2x.png'
    },
    {
      name: 'Skin Problems',
      para1: 'Skin complaints are common even when at low alcohol levels.',
      para2: 'Alcohol is broken down in your bowel. The chemicals that are produced by alcohol inflame your intestines. Meaning they are less able to absorb the nutrients from your food, so you do not have the key ingredients for healthy skin putting you at risk of dry, itchy or waxy skin. Also you can have problems with your nails, lips and tongue.',
      icon: 'assets/icons/SkinProblems@2x.png'
    },
    {
      name: 'Neuropathy',
      para1: 'Neuropathy is caused by a lack of nutrients being absorbed by your bowel; usually these nutrients are converted to chemicals that help send signals throughout your body. When your nutrients are very low you may find that the signals cannot get through easily and so you may get pins and needles in your fingers and toes. This can progress until your hands and feet become permanently numb. You can also be in pain and males may get erectile dysfunction.',
      para2: '',
      icon: 'assets/icons/Neuropathy@2x.png'
    }
  ];
}]);
