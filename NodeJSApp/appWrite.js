let functions = require('./functionalities');
let sensor = require('node-dht-sensor');

//let message = 'My awesome sample message from PC';
let nextHash = '';

sensor.read(22, 4, function (err, temperature, humidity)
{
    if (!err)
    {
        let message = Date.now() + ' '+ 'temp: ' + temperature.toFixed(1) + '  C, ' +
        'humidity: ' + humidity.toFixed(1) + '%';
        functions.holoTextWrite(message, function (hash)
        {
            nextHash = hash;
            console.log('Message-->' + message + ', Hash-->' + nextHash);

            // functions.holoTextRead(nextHash, function (message) {
            //     console.log('Message-->' + message);
            // });
        });
    }
    else
    {
        let message = 'No data from sensor, writing dump data: 15 C, humidity: 50%';
        functions.holoTextWrite(message, function (hash)
        {
            nextHash = hash;
            console.log('Message-->' + message + ', Hash-->' + nextHash);

            // functions.holoTextRead(nextHash, function (message) {
            //     console.log('Message-->' + message);
            // });
        });
    }
});
