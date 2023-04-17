const express = require('express')

const PORT = process.env.PORT || 3001

const app = express()

app.listen(PORT, () => console.log(`Serving up delicious fruits on port ${PORT} 🍒`))

app.get('/hello', (req, res) => {
    console.log('hello world!')
    res.send('hello world!')
})

app.get('/greet/:name', (req, res) => {
    res.send(`Why hello there, ${req.params.name}!`)
})

app.get('/five', (req, res) => {
    const five = [1, 2, 3, 4, 5]
    res.send(five)
})

app.get('/fruits', (req, res) => {
    const fruits = ['apple', 'pear', 'watermelon', 'orange', 'peach']
    res.send(fruits)
})

app.get('/fruits/:name', (req, res) => {
    const fruits = ['apple', 'pear', 'watermelon', 'orange', 'peach']
    const fruitName = req.params.name
    const fruit = fruits.find(fruit => fruit === fruitName)
    if (!fruit) {
        return res.status(404).send("I don't have any of those, sorry!")
    }
    res.send(`I found you a ${fruitName}!`)
})

app.get('/veggies/:name', (req, res) => {
    const veggies = ['carrot', 'eggplant', 'lettuce', 'potato', 'broccoli']
    const veggieName = req.params.name
    const veggie = veggies.find(veggie => veggie === veggieName)
    if (!veggie) {
        return res.status(404).send("I don't have any of those, sorry!")
    }
    res.send(`I found you a ${veggieName}!`)
})