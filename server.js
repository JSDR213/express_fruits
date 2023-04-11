const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();


// start off by defining a simple GET route
app.get('/hello', (req, res)=>{
    console.log('hello world!')
    res.send('hello world!')
})

// GET /greet/:name should return a greeting with the supplied name, e.g., 'Why hello there, <name>!'
// Recall you can access the URL parameters with req.params
app.get('/greet/:name', (req,res)=>{
    res.send(`Why hello there, ${req.params.name}`)
})

// GET /five should return an array of the numbers from 1-5
app.get('/five', (req, res)=>{
    res.send(
        [1, 2, 3, 4, 5]
    )
})

// GET /fruits should return an array with all the fruits.
app.get('/fruits', (req, res) => {
    const fruits = ['bananas', 'bananas', 'apples', 'oranges', 'apples', 'grapes', 'mangos', 'tangerines']
    res.send(fruits)
  })

// Now let's add a route that takes a route parameter name and retrieves the fruit that matches the supplied name.
// app.get('/fruits/:name', (req, res) => {
//     // const fruits = ['bananas', 'bananas', 'apples', 'oranges', 'apples', 'grapes', 'mangos', 'tangerines']
//     let newFruits = fruits.filter((names)=>{
//         return names == req.params.name
//     })
//     res.send(newFruits)
//   })

//   /veggies lets take this same concept and make another route that returns an array of vegetables, then try to create a route for the individual ones

app.get('/veggies/:name', (req, res) => {
    const veggies = ['artichokes', 'asparagus', 'asparagus', 'cauliflower', 'leeks', 'squash', 'peppers', 'tomatoes', 'zucchini']
    let newVeggies = veggies.filter((names)=>{
        return names == req.params.name
    })
    res.send(newVeggies)
  })

//   GET /fruits/sort should return the fruits array sorted alphabetically using .sort()

// was having trouble so tested to make sure that multiple end points was still fine and that the sort function worked
// confirmed it
// app.get('/test/testing', (req, res) => {
//     const veggies = ['zucchini', 'artichokes', 'cauliflower', 'asparagus', 'leeks', 'squash', 'peppers', 'tomatoes']
//     sortedV = veggies.sort()
//     res.send(sortedV)
//   })

app.get('/fruits/sort', (req, res)=> {
    const fruits = ['bananas', 'bananas', 'apples', 'oranges', 'apples', 'grapes', 'mangos', 'tangerines']
    let sortedF = fruits.sort()
    res.send(sortedF)
})

app.get('*', (req, res) => {
    res.send('404 Not Found')
  })

  app.listen(PORT, () => console.log(`Serving up delicious fruits on port ${PORT} 🍒`))