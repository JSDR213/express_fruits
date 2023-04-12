const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();

app.listen(PORT, () => console.log(`Serving up delicious fruits on port ${PORT}`))

app.get('/hello', (req, res) => {
  console.log('hello world!')
  res.send('hello world!')
})

app.get('/greet/:name', (req, res) => {
  res.send({ msg: `Greetings ${req.params.name}!`})
})

app.get('/five', (req, res) => {
  res.send([ 1, 2, 3, 4, 5])
})

app.get('/fruits', (req, res) => {
  const fruit = ['apples', 'blueberries', 'bananas', 'oranges', 'mango']
  res.send(fruit)
})

app.get('/fruit/:name', (req, res) => {
  const fruits = ['apples', 'blueberries', 'bananas', 'oranges', 'mango']
  const fruitName = req.params.name
  const fruit = fruits.find(fruit => fruit === fruitName);
  if (fruit) {
    res.send(`My favorite fruit is ${fruitName}`)
  } else {
    res.send(`${fruitName} is not in the fruit list`)
  }
}) 

app.get('/veggies', (req, res) => {
  const veggies = ['celery', 'carrots', 'yams', 'okra', 'kale']
  res.send(veggies)
})

app.get('/veggie/:name', (req, res) => {
  const veggies = ['celery', 'carrots', 'yams', 'okra', 'kale']
  let veggieSearch = false
  for(i = 0; i < veggies.length; i++) {
    if (req.params.name == veggies[i]){
      res.send(`My favorite vegtable is ${req.params.name}`)
      veggieSearch = true
    }
  }
  if (veggieSearch == false) { 
  res.send(`${req.params.name} is not in the veggie list`)
  }
})

app.get('/fruits/sort', (req, res) => {
  const fruit = ['mango', 'blueberries', 'oranges', 'bananas', 'apples']
  fruit.sort()
  res.send(fruit)
})

app.get('*', (req, res) => {
  res.send('404 Not Found. Hang up and please try again later')
})