
const financialRecordRouter = require('./routes/finRec');
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');


const app = express();
const port = process.env.PORT || 3001;

// Middleware
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello, world!');
});

const mongoURI = "mongodb+srv://sensanjana072:3d6hMkpvevksYdKe@financetracker.9ynhop6.mongodb.net/";


mongoose
    .connect(mongoURI)
    .then(()=> console.log("CONNECTED hehe"))
    .catch(err => console.error("Could'nt connect"));

app.use("/finRec",financialRecordRouter);

app.listen(port,()=>{
    console.log(`Port is sucessfully running on ${port} hehehe`);
})
