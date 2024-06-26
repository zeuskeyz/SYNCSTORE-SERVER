const express = require('express');
const cors = require('cors');
require('dotenv').config();

const connectDB = require('./database_files/connection');
const sessionData = require('./session');
const routing = require('./routes/paths');

const app = express();

app.use(cors({origin:'http://localhost:5173' ,credentials:true}))
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(sessionData)
app.use('/', routing)

app.listen(process.env.PORT,  async () => {
    await connectDB()
    console.log('SERVER STARTED')
})