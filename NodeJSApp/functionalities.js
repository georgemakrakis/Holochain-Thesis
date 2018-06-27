let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

//var task = 'Holochain sample message';
module.exports = {

    holoTextWrite: function holoTextWrite(message, callback) {
        let xhr = new XMLHttpRequest();
        let url = 'http://localhost:3141/fn/readerWriter/holoTextWrite';
        xhr.open('POST', url, true);
        xhr.setRequestHeader('Content-type', 'application/json');
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200)
            {
                callback(xhr.responseText);
            }
        };
        xhr.send(message);
    },

    holoTextRead: function holoTextRead(hash, callback) {
        let xhr = new XMLHttpRequest();
        let url = 'http://localhost:3141/fn/readerWriter/holoTextRead';
        xhr.open('POST', url, true);
        xhr.setRequestHeader('Content-type', 'application/json');
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200)
            {
                callback(xhr.responseText);
            }
        };
        xhr.send(hash);
    },

    getAllTexts: function getAllTexts(callback) {
        let xhr = new XMLHttpRequest();
        let url = 'http://localhost:3141/fn/readerWriter/getAllTexts';
        xhr.open('POST', url, true);
        xhr.setRequestHeader('Content-type', 'application/json');
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200)
            {
                callback(xhr.responseText);
            }
        };
        xhr.send(xhr.responseText);
    }
};


