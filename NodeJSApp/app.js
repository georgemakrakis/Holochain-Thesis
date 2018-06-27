let functions = require('./functionalities');

let message = 'My Holochain-Thesis message from PC office 4';
let nextHash = '';

functions.holoTextWrite(message, function (hash) {
    nextHash = hash;
    console.log('Message-->' + message + ', Hash-->' + nextHash);

    // functions.holoTextRead(nextHash, function (message) {
    //     console.log('Message-->' + message);
    // });
});

// functions.getAllTexts(function (result) {
//
//     result = JSON.parse(result);
//
//     for ( let x=0; x<result.length; x++ )
//     {
//         let content = result[x].Entry;
//         //var timestamp = result[x].Entry.timestamp;
//         console.log('Content-->'+content);
//     }
//
//     /
