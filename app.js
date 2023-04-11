const express = require("express");
const PORT = 3001;
const app = express();


app.listen(PORT, () => {
  console.log(`Serving up delicious fruits on port ${PORT}`);
});

app.get("/hello", (req, res) => {
  console.log("hello world!");
  res.send("hello world!");
});

app.get("/greet/:name", (req, res) => {
  res.send({
    msg: `Why hello there, ${req.params.name}`,
  });
});

app.get("/five", (req, res) => {
  let numArray = [1, 2, 3, 4, 5];
  let randomNum = numArray[Math.floor(Math.random() * numArray.length)];
  res.send(`${randomNum}`);
});

//Fruits array variable
let fruitsArray = [
    {Fruit: 'Apple', price: `$1.30`},
        {Fruit: 'Mango', price: `$2.75`},
        {Fruit: 'Pear', price: `$2.99`},
        {Fruit: 'Strawberries', price: `$1.85`},
        {Fruit: 'Watermelon', price: `$5.99`},
  ];

//Fruits Array
app.get("/fruits", (req, res) => {
  res.send(fruitsArray);
});

//Fruits Name
app.get("/fruits/:name", (req, res, name) => {
    res.send(`Is your favorite fruit ${req.params.name}?`)
  });


//Veggies
  let veggiesArray = [
    {Veggie: 'Potatoes', price: `$6.22`},
        {Veggie: 'Lettuce', price: `$1.99`},
        {Veggie: 'Carrots', price: `$1.22`},
        {Veggie: 'Broccoli', price: `$1.61`},
        {Veggie: 'Celery', price: `$2.24`}
  ];

//Veggies Array
app.get("/veggies", (req, res) => {
  res.send(veggiesArray);
});

//Veggies Name
app.get("/veggies/:name", (req, res, name) => {
    res.send(`${req.params.name} are good for your health!`)
  });

//Bonus Fruit Sort

  app.get('/fruits/sort', (req, res) => {
    let fruitList = ['Apple','Mango', 'Pear', 'Strawberries', 'Watermelon'];
    const sortedFruits = fruitList.sort(function(a,b){
        if(a < b){
            return -1;
        }
        if(b > a){
            return 1;
        }
        return 0;
    })
    console.log(sortedFruits)
    res.send(sortedFruits)
  })


  //Secret Bonus
app.get('*', (req, res) => {
    res.send('404 Not Found')
})
