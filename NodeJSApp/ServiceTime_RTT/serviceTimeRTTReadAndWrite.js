let functions = require('../functionalities');
let fs = require('fs');

functions.getAllTexts(function (result) {

    result = JSON.parse(result);

    //Read all the data and then push them again
    for ( let x=0; x<result.length; x++ )
    {

        let nextHash = '';
        let content = result[x].Entry;
        //var timestamp = result[x].Entry.timestamp;
        console.log('Content-->'+content);

        let message = content+','+Date.now();
        functions.holoTextWrite(message, function (hash) {
            nextHash = hash;
            console.log('Message-->' + message + ', Hash-->' + nextHash);
        });

    }
});