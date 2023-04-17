// SETUP AN EXPRESS SERVER
// Import Express / Cors / Controllers into index.js
const express = require("express");

// Define PORT Variable
const PORT = 3001;

// Initiate an app Instance below initial imports
const app = express();
app.use(express.json());

// ADDING BASIC ROUTES
// Home Page
app.get("/", (req, res) => {
  res.send("Home Page");
});

// Simple GET Route
app.get("/greet", (req, res) => {
  console.log("simple GET route");
  res.send("Hello World!");
});

// GET /greet/:name
app.get("/greet/:name", (req, res) => {
  console.log(`simple GET route with name param`);
  res.send({
    msg: `Why hello there,${req.params.name}!`,
  });
});

// GET /five
app.get("/five", (req, res) => {
  res.send([1, 2, 3, 4, 5]);
});

// FRUIT & VEGGIES ROUTES
// FRUITS
const fruits = [
  { name: "apple", color: "red or green" },
  { name: "blackberry", color: "dark purplish-black" },
  { name: "apricot", color: "pale yellowish-orange" },
  { name: "strawberry", color: "red" },
  { name: "mango", color: "yellow" },
];

app.get("/fruits", (req, res) => {
  // Return the array of fruits
  res.send(fruits);
});

// BONUS - Add Fruits Sort
// Function to sort fruits array by name
function sortFruitsByName(fruitsArray) {
  return fruitsArray.sort((a, b) => {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  });
}

app.get("/fruits/sort", (req, res) => {
  // Sort the fruits array by name
  const sortedFruits = sortFruitsByName(fruits);

  res.send(sortedFruits);
});

app.get("/fruits/:name", (req, res) => {
  const fruitName = req.params.name.toLowerCase();

  // Use the `filter` higher-order function to find the fruit by name
  const fruit = fruits.filter((f) => f.name === fruitName);

  if (fruit.length > 0) {
    res.send(fruit[0]); // Send the first matching fruit
  } else {
    res.status(404).send({ error: "Fruit not found" });
  }
});

// VEGGIES
const veggies = [
  { name: "kale", color: "green" },
  { name: "onion", color: "red or white" },
  { name: "lettuce", color: "green" },
  { name: "peas", color: "green" },
  { name: "corn", color: "yellow" },
];

app.get("/veggies", (req, res) => {
  // Return the array of veggies
  res.send(veggies);
});

app.get("/veggies/:name", (req, res) => {
  const veggieName = req.params.name.toLowerCase();

  const veggie = veggies.filter((f) => f.name === veggieName);

  if (veggie.length > 0) {
    res.send(veggie[0]); // Send the first matching fruit
  } else {
    res.status(404).send({ error: "Veggie not found" });
  }
});

// Bind the App to a PORT with app.listen() at the bottom of the file
app.listen(PORT, () => {
  console.log(`Serving up delicious fruits & veggies on port ${PORT}`);
});
