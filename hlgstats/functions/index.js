
const functions = require('firebase-functions');
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
const cors = require('cors')({origin: true});



//http callable functions


exports.hello = functions.https.onCall((data,context) =>{
    cors(req, res, () => {
        return new Promise((resolve,reject) =>{
            console.log("In promise");
            resolve("Hello");
          }).catch(()=>{
            reject(console.log("Finished"));
          });
    });
}); 