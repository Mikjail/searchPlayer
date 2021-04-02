const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

require('./routes/playerRoute')(app);

// 1. Express will serve up prod assets like main.css and main.js
app.use(express.static('players-ui/build'));

// 2. Express wirll serve up index.html if it doesn't recognize the file 
const path = require('path');
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'players-ui', 'build', 'index.html'));
})

const PORT = process.env.PORT || 5000;

console.log(`listening to port ${PORT}`);

app.listen(PORT);