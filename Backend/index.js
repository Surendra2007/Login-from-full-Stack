require('dotenv').config();
const express = require('express');
const db = require('./Config/db');
const cors = require('cors');
const User = require('./models/userModel');

const app = express();
app.use(cors());
app.use(express.json());


app.get('/', (req, res) => {
    res.send('hello google');
})

const PORT = 4000;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));