let http = require('http');
const [_node, _path, urlLink] = process.argv

http.get(urlLink, response =>  {

	let result = '';
    response.setEncoding('utf8');
    response.on('data',  data => {
     result += data;
 });

	response.on('end', () => {
		console.log(result.length);
		console.log(result);
	});
});
