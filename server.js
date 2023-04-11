const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();

let fruits = ['bananas', 'apples','strawberries', 'raspberries', 'blueberries', 'grapefruits', 'mandarins','limes', 'oranges', 'pineapple', 'kiwi']
let vegetables = ['radish', 'lettuce','Jicama', 'Kale', 'Kohlrabi', 'Leeks', 'Arugula', 'spinach','Cauliflower','Celery', 'Chard']

//------------COMPREHENSION--3.5ish-------------------------------
//------------COMPLETION-----5------------------------------------



app.get('/hello', (req, res) => {
    console.log('hello world!')
    res.send('hello world!')

})
app.get('/greet/:name', (req, res) => {
    console.log(req.params.id)
    res.send({
        msg: `Why hello there, ${req.params.name}`
    })

})
app.get('/five', (req, res) => {
    let num = [1, 2, 3, 4, 5]
    //console.log(num)
    res.send(num)

})
app.get('/fruits', (req, res) => {
    //console.log(fruits)
    res.send(fruits)

})
app.get('/fruits/sort', (req, res) => {
    res.send(fruits.sort())
})
app.get('/fruits/:name', (req, res) => {
    //Really overthought this part...
    // const fruit = [
    //     {name:banana},
    //     {name:kiwi}
    // ]
    // const map = fruit.filter(req.params.name)
    if (fruits.includes(req.params.name)) {
        res.send(`${req.params.name} is a fruit in the array.`)

    } else {
        res.send(`${req.params.name} is not a fruit in the array`)
    }
    //console.log(map);
    //console.log(maps);
    //res.send(fruits.filter(req.params.name))
    //res.send(`${req.params.name}`)
})
app.get('/vegetables', (req, res) => {
    console.log(vegetables)
    res.send(vegetables)
})
app.get('/vegetables/sort', (req, res) => {
    res.send(vegetables.sort())
})
app.get('/vegetables/:name', (req, res) => {
    if (vegetables.includes(req.params.name)) {
        res.send(`${req.params.name} is a vegetable in the array.`)

    } else {
        res.send(`${req.params.name} is not a vegetable in the array`)
    }

})



app.get('*', (req, res) => {
    res.send('404 Not Found')
})

app.listen(PORT, () => console.log(`Serving up delicious fruits (and vegetables) on port ${PORT} 🍒`))