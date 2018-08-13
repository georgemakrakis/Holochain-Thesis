let functions = require('../functionalities');
let fs = require('fs');

functions.getAllTexts(async function (result) {

    result = JSON.parse(result);

    //Before write the data, clear the file and add header
    await getFileReady();

    for ( let x=0; x<result.length; x++ )
    {
        let content = result[x].Entry;
        //var timestamp = result[x].Entry.timestamp;
        console.log('Content-->'+content+','+Date.now());

        //todo To write to file uncomment getFileReady() and the code below
        await fs.appendFile('data_received_RTT', content + ',' + Date.now() + '\n', function (err) {
            if (err)
            {
                return console.log(err);
            }
        });
    }

    //console.log('Result-->'+result);
});

async function getFileReady(){
    await fs.writeFile('data_received_RTT', '', function (err) {
        if (err)
        {
            return console.log(err);
        }
    });
    await fs.appendFile('data_received_RTT', 'message_num,time_send,time_received' + '\n', function (err) {
        if (err)
        {
            return console.log(err);
        }
    });
}