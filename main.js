const cities = require('cities');//import cities
const url = require('url');//node module
const http = require('http');//node module

const server = http.createServer((request, response) => {
    var city, query;
    query = url.parse(request.url, true).query;

    if (query.zipCode) city = cities.zip_lookup(query.zipCode).city;
    else city = "not found"
    response.writeHead(200, { "Content-Type": "application/json" });

    let returnObj = { "zipcode": query.zipCode, "city": city };

    response.write(JSON.stringify(returnObj));
    response.end();
});


// http://localhost:3000/?zipCode=93436
server.listen(3000);
