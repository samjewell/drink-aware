app.controller('MainController', ['$scope', function($scope) {
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
      name: 'Arrythmia',
      para1: 'An Arrythmia is when your heart is beating irregularly; this can cause you to feel dizzy, weak and even to lose consciousness. You will also have chest pains and palpitations.',
      para2: '',
      icon: 'assets/icons/Arrythmia@2x.png'
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
    },
    {
      name: 'Korsakoffs',
      para1: 'Korsakoffs Syndrome is an irreversible condition. If you have Korsakoffs your brain may look like the image on the right, not like the healthy brain on the left. As a result of long-term nutrient deficiency parts of the brain have died. If you have Korsakoffs you will not form new memories, you will have memory loss. A quarter of people with Korsakoffs end up in residential care homes at an early age for the rest of their lives.',
      para2: '',
      icon: 'assets/icons/Korsakoffs@2x.png'
    },
    {
      name: 'Cirrhosis',
      para1: 'Cirrhosis is scarring of the liver caused by continuous liver damage over time. This cannot be reversed and is a slow progressive disease. Alcohol abuse is one of the most common causes and continueing to drink alcohol will speed up the condition. Eventually the liver is prevented from working properly.',
      para2: 'Symptoms vary and you may not have any initially but as the disease worsens, symptoms can include; yellowing of the skin, fluid retention, itchy skin and confusion.',
      icon: 'assets/icons/Cirrhosis@2x.png'
    },
    {
      name: 'Ascites',
      para1: 'Ascites is caused by liver cirrhosis in its later stages. The liver becomes unable to produce enough of a protein called Albumin. This means fluid leaks into the space between your organs and the wall of your abdomen. This causes your stomach to swell (as in the picture). This can be painful, uncomfortable and make you breathless, tired and reduce your appetite.',
      para2: '',
      icon: 'assets/icons/Ascites@2x.png'
    },
    {
      name: 'Hepatic Encephalopathy',
      para1: 'Hepatic Encephalopathy is caused by liver cirrhosis in its later stages. The liver is unable to do its job effectively as the toxic chemical ammonia builds up in your blood. The ammonia causes your brain to swell. This can cause you to be confused and irritable which gets worse if you are not treated and can lead to coma and death.',
      para2: '',
      icon: 'assets/icons/HepaticEncephalopathy@2x.png'
    },
    {
      name: 'Oesophageal Varices',
      para1: 'Oesophageal Varices is caused by liver cirrhosis in its later stages. As the liver struggles to cope with the amount of blood it needs to process, the blood begins to build up and it tries to find somewhere to go. This can put pressure on your oesophagus and cause blood vessels to bulge and occasionally burst. This means you may vomit blood or produce black tarry faeces. If either of these happen it is important to seek medical advice immediately.',
      para2: '',
      icon: 'assets/icons/OesophagealVarices@2x.png'
    }
  ];
}]);
