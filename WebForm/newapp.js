const { response, request } = require("express");
const http = require("http")
const express = require('express');
const { copyFileSync } = require('fs');
const app = express();
const path = require('path');

//connection settings
const port =  3000;
//hostame: IP associated wth any device associated with network
const hostname = '127.0.0.1';

//callback function to be executed when a user makes a request to our server
//request will be something reeived by our server when the user makes any request 
//response will be sent back to the user 
const respond = (request, response) => {
    console.log(request.url); //this will print the url which the user is asking from the server
    
    //response.setHeader(header name, value)
    response.setHeader('Content-Type', 'text/plain') 

    //writeHead(status code, {headers})
    response.writeHead(200, {'Content-Type' : 'text/html'})

    //response.write sends the body of the response 
    response.write(`<!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width">
      <title>Node</title>
    </head>
    <body>`);
        
        response.write('<p>Creating a form to create an API process bla bla bla and bla bla bla</p>');
        response.end(`</body></html>`);

};

//create a server using HTTP module

const server = http.createServer(respond); //this is executed when a user makes request to our server 

//listen to the user requests 
server.listen(port, hostname, () => {console.log(`listening on port: ${port}, hostname: ${hostname}`)});

//to send  the request we need to go to the chrome and the browser will send the request localhost3000