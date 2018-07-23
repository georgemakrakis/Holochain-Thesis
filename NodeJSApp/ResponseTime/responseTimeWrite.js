let functions = require('../functionalities');
let fs = require('fs');

async function writeMultiple()
{
    //Before write the data, clear the file and add header
    //await getFileReady();

    for (let i = 0; i < 10; i++)
    {
        let message = i+'';
        let nextHash = '';

        await functions.holoTextWrite(message, function (hash) {
            nextHash = hash;
            console.log('Message-->' + message + ', Hash-->' + nextHash);
        });

        //todo To write to file uncomment getFileReady() and the code below
        // await fs.appendFile('data_published', message + ',' + Date.now() + '\n', function (err) {
        //     if (err)
        //     {
        //         return console.log(err);
        //     }
        // });
    }
}

async function getFileReady(){
    await fs.writeFile('data_published', '', function (err) {
        if (err)
        {
            return console.log(err);
        }
    });
    await fs.appendFile('data_published', 'message_num,time_created' + '\n', function (err) {
        if (err)
        {
            return console.log(err);
        }
    });
}

writeMultiple();

