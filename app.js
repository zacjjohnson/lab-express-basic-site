const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.static('public'));
app.use(express.static('views'));




app.get('/', (req, res, next) => {
    res.sendFile(__dirname + '/views/index.html');
});

app.get('/about', (req, res, next) => {
    res.sendFile(__dirname + '/views/about.html');
});

app.get('/media', (req, res, next) => {
    res.sendFile(__dirname + '/views/media.html');
});



app.listen(PORT, () => console.log(`My app is listening on port ${PORT}`));