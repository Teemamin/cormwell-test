const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const connectDB = require('./db/connect');
const expressAsync = require('express-async-errors');
const cookieParser = require('cookie-parser');

const app = express()
dotenv.config()

//security packages
const helmet = require('helmet');
const xss =  require('xss-clean');
const mongoSanitize = require('express-mongo-sanitize');

//middleware
const pageNotFound = require('./middleware/pageNotFound')
const errorHandler = require('./middleware/errorHandler')

// route

const authRoutes = require('./routes/authRoutes')

app.use(express.json())
app.use(express.static(path.resolve(__dirname, './client/build')));
app.use(cookieParser())
//security packages
app.use(helmet());
app.use(xss());
app.use(mongoSanitize());

app.get('/',(req,res)=>{
    res.json({msg: 'hello from express'})
})

app.get('/api',(req,res)=>{
    res.json({msg: 'hello from express'})
})

app.use('/user',authRoutes)

//redirect all get requests to the react app,after checking our default  API routes above first
app.get('*', function (request, response) {
    response.sendFile(path.resolve(__dirname, './client/build', 'index.html'));
  });


app.use(pageNotFound)

app.use(errorHandler)
const port = process.env.PORT || 5000

const start = async ()=>{
    try {
      await connectDB(process.env.MONGO_URL)  
      app.listen(port, () => console.log(`Server is listening on port ${port}...`));
    } catch (error) {
        console.log(error)
    }
}

start()