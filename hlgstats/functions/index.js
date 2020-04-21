const functions = require('firebase-functions');
const cors = require('cors')({ origin: true });
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//

//http callable functions
/*
exports.getSummoner = functions.https.onCall((data,context) => {
  return cors(req, res, () => {

    console.log("https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/haikusfrombuddha?api_key=RGAPI-ad842bad-5dd8-4b21-9172-04672f897613");
  });
});
*/
exports.hello = functions.https.onCall((data,context) =>{
    console.log("Starting Cloud Function")
    return new Promise((resolve,reject) =>{
      fetch("https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/haikusfrombuddha?api_key=RGAPI-ad842bad-5dd8-4b21-9172-04672f897613").then((res) =>{
        console.log("Worked in Cloud")
        resolve(res);
      }).catch((err) =>{
        console.log("Failed in Cloud")
        reject("Error Fetching");
      });





  });
}); 