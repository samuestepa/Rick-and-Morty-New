const http = require('http');
const data = require('./utils/data');

http
.createServer((request, response) => {
    response.setHeader('Access-Control-Allow-Origin', '*');
    if(request.url.includes("/rickandmorty/character")){

        const id =  request.url.split('/').at(-1)
        const characterFound = data.find((character) => {
             return character.id === +id 
        })
        response.writeHead(200, {'Content-type': 'application/json'})
        .end(JSON.stringify(characterFound))
    } else {
        response.writeHead(404, {'Content-type': 'text/plain'})
        .end('Error')
    }
})
.listen(3001)