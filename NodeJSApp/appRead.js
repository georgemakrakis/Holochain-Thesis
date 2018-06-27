let functions = require('./functionalities');

functions.getAllTexts(function (result) {

    result = JSON.parse(result);

    for ( let x=0; x<result.length; x++ )
    {
        let content = result[x].Entry;
        //var timestamp = result[x].Entry.timestamp;
        console.log('Content-->'+content);
    }

    //console.log('Result-->'+result);
});