const http = require('http');

const [_node, _path, ...urls] = process.argv

const results = []

let counter = 0;

urls.forEach((url, index) => {
    http.get(url, response =>  {

        response.setEncoding('utf8');
        response.on('data',  data => {
            results[index] = (results[index] || '') + data;    
        });
        response.on('end', () => {
            counter++;
            if (counter === urls.length) {
               results.forEach(data => console.log(data))
            }
        });  
    });
});
