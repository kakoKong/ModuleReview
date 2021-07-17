const express = require('express')
const cors = require('cors')
const app = express()
const mongoose = require('mongoose');

require('dotenv').config()

const port = process.env.PORT || 5000;

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const connection = mongoose.connection;
connection.once('open', ()=>{
  console.log('connected to MongoDB')
})

app.use(cors());
app.use(express.json());

const departmentRouter = require('./routes/departmentRoute');
const moduleRouter = require('./routes/moduleRoute');
const reviewRouter = require('./routes/reviewRoute');

app.use('/departments', departmentRouter);
app.use('/modules', moduleRouter);
app.use('/reviews', reviewRouter);

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Listening to port http://localhost:${port}`)
})