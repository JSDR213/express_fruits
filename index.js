const express = require('express');
const PORT = process.env.PORT || 3001;

const app = express();

let fruits = [
    "apples",
    "bananas",
    "oranges",
    "pears",
    "mangos"
]

app.get('/hello', (req, res)=>{
    console.log('hello, world!')
    res.send('hello, world!')
})

app.get('/greet/:name', (req, res)=>{
    res.send(`hello, ${req.params.name}`)
})

app.get('/five', (req, res)=>{
    let myNum = 5;
    let myArray = [];
    for (i = 1; i < (myNum + 1); i++){
        myArray.push(i)
    }
    res.send(myArray
    )
})
app.get('/fruits', (req,res)=>{
    res.send(fruits)
})

app.get('/fruits/:name',(req,res)=>{
    if(fruits.includes(req.params.name)){
        res.send(req.params.name)
    }
    
})

app.listen(PORT, ()=>console.log(`Serving up some delicious fruits on port ${PORT}`))