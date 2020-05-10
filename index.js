const express = require('express');
const app = express();
const DaataStore = require('nedb');
const { request } = require('express');

const port = process.env.PORT || 3000;
app.listen(port,()=>console.log(`the port is open and listen port ${port}`));
app.use(express.static('public')); 
app.use(express.json({  limit: '1mb'  }));
const Database = new DaataStore('Database.db');
Database.loadDatabase();
const time_stamp = Date.now();
require('dotenv').config;

app.get('/getdata',(request,response)=>{
    Database.find({},(err,data)=>
    {
        if (err) {
            response.end();
            return;
        }
        response.json(data);
    });
});

app.post('/api', (request, response)=>{
    console.log('i got the request');
    const data = request.body;
    data.time_stamp = time_stamp;
    Database.insert(data);
    console.log(data.longi, data.lati , data.entry, time_stamp);
    response.json(data);
}); 