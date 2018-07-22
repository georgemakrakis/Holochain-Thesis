let functions = require('./functionalities');
let fs = require('fs');

functions.getAllTexts(function (result) {

    //Before write the data, clear the file and add header
    fs.writeFile('data_received', '', function (err) {
        if (err)
        {
            return console.log(err);
        }
    });
    fs.appendFile('data_received', 'message_num,time_created' + '\n', function (err) {
        if (err)
        {
            return console.log(err);
        }
    });

    result = JSON.parse(result);


    for ( let x=0; x<result.length; x++ )
    {
        let content = result[x].Entry;
        //var timestamp = result[x].Entry.timestamp;
        console.log('Content-->'+content);

        fs.appendFile('data_received', content + ',' + Date.now() + '\n', function (err) {
            if (err)
            {
                return console.log(err);
            }
        });
    }

    //console.log('Result-->'+result);
});