const express = require('express');
const mongoDb = require('./db/db');

const register = require('./routes/userRegister');
const login = require('./routes/userLogin');
const event = require('./routes/userEvents');
const electronic = require('./routes/electronic');

const app = express();
app.use(express.json());

mongoDb();

app.use('/api/v1/register', register);
app.use('/api/v1/login', login);
app.use('/api/v1/event', event);
app.use('/api/v1/latest', electronic);

app.listen(process.env.PORT || 1100, ()=>{
    console.log('server is started');
})