const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Serve static files (e.g., CSS, images, etc.) from the 'public' directory
app.use(express.static('public'));

// Set up your view engine if you're using one (e.g., EJS)
app.set('view engine', 'ejs');
app.set('views', 'views'); // Path to your views directory

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));

// Define a route for the index page
app.get('/', (req, res) => {
  res.render('index');
});

// Define a route for the login page
app.get('/login', (req, res) => {
    const randomValue = Math.floor(Math.random() * 3) + 1;
    console.log('This is the random value for home: ' + randomValue);
    res.render('login', { randomValue });
});

// Defineo a route for the home page
app.get('/home', (req, res) => {
    const randomValue = Math.floor(Math.random() * 3) + 1;
    console.log('This is the random value for home: ' + randomValue);
    res.render('home', { randomValue });
});

// Define the route for the user's profile
app.get('/yourshelf', (req, res) => {
    const randomValue = Math.floor(Math.random() * 3) + 1;
    console.log('This is the random value for Profile: ' + randomValue);
    res.render('YourShelf', { randomValue });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
