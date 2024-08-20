const express = require('express');
const app = express();
const port = 3001;

// Sample data to serve
const data = {
    name: 'John Wick',
    age: 30,
    city: 'New York'
};

// Middleware to parse JSON bodies
app.use(express.json());

// Define a route to get JSON data
app.get('/api/data', (req, res) => {
    res.json(data);
});

// Define a route to update JSON data
app.put('/api/data', (req, res) => {
    const { name, age, city } = req.body;
    if (name) data.name = name;
    if (age) data.age = age;
    if (city) data.city = city;
    
    res.json(data);
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
