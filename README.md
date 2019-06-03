[Dokumentasi]

## Configuration

 1) To use your own surveys register in [SurveyJS](https://surveyjs.io/Account/Register)
 2) Create your own survey.
 3) In providers/survey/survey.ts replace: accessKey with your [SurveyJS API accessKey](https://surveyjs.io/Help/Index/)
    to get your active surveys.
 
 NOTE: To see your survey [results](https://surveyjs.io/Service/MySurveys/)
    

## Running

Before you go through this example, you should have at least a basic understanding of Ionic concepts. You must also already have Ionic installed on your machine.

* Test in localhost:

To run it, cd into `ionic-surveyjs` and run:

```bash
npm install
ionic serve
```

* Test in Android: 

```bash
ionic cordova add platform android
ionic cordova run android
```

* Test in iOS: 

```bash
ionic cordova add platform ios
ionic cordova run ios
```

## Requirements

* [Node.js](http://nodejs.org/)
* [Ionic Cordova](https://ionicframework.com/docs/intro/installation/)