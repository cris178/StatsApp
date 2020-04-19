const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.api = functions.https.onRequest((request, response) => {
     const api = "https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/haikusfrombuddha?api_key=RGAPI-ad842bad-5dd8-4b21-9172-04672f897613";
  response.send(api);
});


//http callable functions

exports.getSummoner = functions.https.onCall((data,context) => {
    return 'https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/haikusfrombuddha?api_key=RGAPI-ad842bad-5dd8-4b21-9172-04672f897613';
});