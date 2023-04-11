//make it into a game, is it a fruit or a vegetable?

const express = require('express')
const PORT = process.env.PORT || 3001

const app = express()

const fruits = [{'name': 'apple', 'emoji' : '🍏'}, {'name':'pineapple', 'emoji' : '🍍'}, 
                {'name':'kiwi', 'emoji' : '🥝'}, {'name':'banana', 'emoji' : '🍌'}, 
                {'name':'mango', 'emoji' : '🥭'}, {'name':'cherry', 'emoji' : '🍒'}, 
                {'name':'peach', 'emoji' : '🍑'}, {'name':'grape', 'emoji' : '🍇'}, 
                {'name':'strawberry', 'emoji' : '🍓'}, {'name':'blueberry', 'emoji' : '🫐'}]

const veggies = [{'name':'carrot', 'emoji' : '🥕'}, {'name':'potato', 'emoji' : '🥔'}, 
                {'name':'broccoli', 'emoji' : '🥦'}, {'name':'onion', 'emoji' : '🧅'},
                {'name':'corn', 'emoji' : '🌽'}, {'name': 'avocado', 'emoji' : '🥑'}]

//displays and logs hello
app.get('/hello', (req, res) => {
    console.log('hello world!')
    res.send('hello world!')
})

//displays greeting using name in parameter
app.get('/greet/:name', (req, res) => {
    console.log(`Getting ${req.params.id}`)
    res.send({msg: `Hey there, ${req.params.name}!`})
})

//returns list of nums 1-5
app.get('/five', (req, res) =>{
    nums = [1,2,3,4,5]
    res.send(nums)
})

//returns full fruit list
app.get('/fruits', (req, res) =>{
    res.send(fruits)
})

//sorts fruit list
app.get('/fruits/sort', (req, res) =>{
    res.send(fruits.sort())
})

//returns fruit named in parameter, or error if not found
app.get('/fruits/:name', (req, res) =>{
    n = req.params.name
    const result = fruits.find(fruit => fruit.name == n)
    if (result) 
        {res.send(result)}
    else
        {res.send(`We don't like ${n} here! 🤢`)}
})

//returns full veggie list
app.get('/veggies/', (req, res) =>{
    res.send(veggies)
})

//sorts veggie list
app.get('/veggies/sort', (req, res) =>{
    res.send(veggies.sort())
})

//returns veggie named in parameter, or error if not found
app.get('/veggies/:name', (req, res) =>{
    n = req.params.name
    const result = veggies.find(veggie => veggie.name == n)
    if (result) 
        {res.send(result)}
    else
        {res.send(`We don't like ${n} here! 🤢`)}
})

//returns error msg if invalid route
app.get('*', (req, res) => {
    res.send('404 Not Found')
})

app.listen(PORT, () => console.log(`Serving up delicious fruits on port ${PORT} 🍒`))


