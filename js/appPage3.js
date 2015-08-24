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
    },
    {
      name: 'Hypertension',
      para1: 'Our blood circulates our body at a certain pressure. Alcohol causes your blood pressure to rise which puts pressure on your heart putting you at risk of having a heart attack and also putting extra pressure on your brain. The extra pressure on your brain increases your risk of having a stroke.',
      para2: 'Alcohol also weakens the heart muscle which means it can’t pump effectively.',
      icon: 'assets/icons/Hypertension@2x.png'
    },
    {
      name: 'Fatty Liver',
      para1: 'When alcohol is broken down in your body it is converted into toxic chemicals. The liver then breaks these chemicals down into fats and these fats build up in your liver causing fatty liver disease.',
      para2: 'Fatty liver disease is reversible if you stop drinking but if you carry on you may be at risk of damaging your liver permanently developing liver cirrhosis.',
      icon: 'assets/icons/FattyLiver@2x.png'
    },
    {
      name: 'Cancer',
      para1: 'Drinking alcohol increases your risk of developing certain cancers including liver, breast, bowel, mouth and throat cancer.',
      para2: '',
      icon: 'assets/icons/Cancer@2x.png'
    },
    {
      name: 'Pancreas',
      para1: 'Alcohol can cause your pancreas to become inflamed. Your pancreas is very important as it helps you digest your food and regulates your blood sugars.',
      para2: 'This is known as pancreatitis which is incredibly painful. If you have pancreatitis you may also: get smelly fatty faeces that won’t flush down the toilet, vomiting, jaundice, problems eating, diabetes and long term pain.',
      icon: 'assets/icons/Pancreas@2x.png'
    },
    {
      name: 'Wernicke’s Encephalopathy',
      para1: 'Wernicke’s Encephalopathy is caused by a lack of nutrients in your body; usually these nutrients are converted to chemicals that send signals throughout your body. When your nutrients are very low the signals won’t be sent or only part might get through causing parts of your brain to stop working. Therefore your body can also struggle to cope meaning you may walk with slow wide steps, have jerky eye movements, be very confused and be unable to look after yourself.',
      para2: '',
      icon: 'assets/icons/WernickesEncephalopathy@2x.png'
    },
    {
      name: 'Stroke',
      para1: 'Drinking alcohol increases your risk of having a stroke. A stroke is when the blood supply is cut off to part of your brain, this can happen either through a blockage or a bleed on your brain. If you have a stroke you may be paralysed, have difficulty walking and speaking, be incontinent and/or have trouble swallowing.',
      para2: '',
      icon: 'assets/icons/Stroke@2x.png'
    },
    {
      name: 'Arrhythmia',
      para1: 'An Arrhythmia is when your heart is beating irregularly; this can cause you to feel dizzy, weak and even to lose consciousness. You will also have chest pains and palpitations.',
      para2: '',
      icon: 'assets/icons/Arrhythmia@2x.png'
    },
    {
      name: 'Alcohol Hepatitis',
      para1: 'Some patients with liver disease that are still drinking alcohol will be at risk of developing alcohol hepatitis. This is a serious condition that can limit your lifespan and put you at risk of cirrhosis of the liver and liver failure.',
      para2: '',
      icon: 'assets/icons/AlcoholHepatitis@2x.png'
    },
    {
      name: 'Cardiomyopathy',
      para1: 'Cardiomyopathy is caused by high blood pressure. Your heart becomes enlarged or ‘flabby’. This means that your heart walls are stretched and thin and therefore they are not as effective at pumping the blood around your body. This will make you feel tired, have difficulty breathing and cause heart attacks and pain. This is a serious illness that can sometimes be managed by medications but may end with you needing a heart transplant.',
      para2: '',
      icon: 'assets/icons/Cardiomyopathy@2x.png'
    }
  ];
}]);
