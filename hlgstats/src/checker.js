/*
const proxy = require("http-proxy-middleware");

module.exports = function(app){
    app.use(
        proxy("/hello",{
            target: "https://us-central1-hlgstats-67fd1.cloudfunctions.net/",
            secure: false,
            changeOrigin: true
        })
    );
};




const functions = require('firebase-functions');
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//

//http callable functions


exports.hello = functions.https.onCall((data,context) =>{
  return new Promise((resolve,reject) =>{
    console.log("In promise");
    resolve("hello");
  })
}); 

*/