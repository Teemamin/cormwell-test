const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./db/connect');
const expressAsync = require('express-async-errors');
const cookieParser = require('cookie-parser');

const app = express()
dotenv.config()

//middleware
const pageNotFound = require('./middleware/pageNotFound')

// route

const authRoutes = require('./routes/authRoutes')

app.use(express.json())
app.use(cookieParser())

app.get('/',(req,res)=>{
    res.json({msg: 'hello from express'})
})

app.get('/api',(req,res)=>{
    res.json({msg: 'hello from express'})
})

app.use('/user',authRoutes)


app.use(pageNotFound)

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