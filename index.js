const express = require('express');
const app = express();

//conf
require('dotenv').config();
const PORT = process.env.PORT;
console.log(PORT);

// MIDDLEWARE
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

//ROUTES
app.get('/', (req, res) => {
    res.send('Hello Bread. Welcome to an awesome App');

});

// BREADS ROUTES
app.use('/breads', require('./controllers/breads_controller'));

// 404 Page
app.get('*', (req, res) => {
    res.status(404).send('404. Page not found.');
});

//LISTEN
app.listen(PORT, () => {
      console.log(`server is running at: http://localhost:${PORT}`)
});