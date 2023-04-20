
const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();


 app.listen(PORT, () => console.log(`Serving up delicious fruits on port ${PORT} 🍒`))

 const numbers = [1, 2, 3, 4, 5]

   const fruitList = [
       {name: `apple`},
       {name:`orange`},
       {name: `date`},
       {name:`banana`},
       {name:`kiwi`},
       {name:`tomato`},
       {name:`pumpkin`},
       {name:`kumquat`},
       {name:`acai`},
       {name:`blackberry`}
   ]

   const vegList = [
       {name: `artichoke`},
       {name:`jicama`},
       {name: `kale`},
       {name:`celeriac`},
       {name:`chard`},
       {name:`parsnip`},
       {name:`yam`},
       {name:`chicory`},
       {name:`kohlrabi`},
       {name:`broccoli`}
   ]
 

   app.get('/hello', (req, res) => {
       console.log('hello world!')
       res.send('hello world!')
     
     })

   //I had to have a for loop here and within the app.get for these to work correctly. There's no way that's the best solution.
     for (let i = 0 ; i < fruitList.length ; i ++) {
       console.log(fruitList[i].name)
       }

   for (let k = 0 ; k < vegList.length ; k ++) {
           console.log(vegList[k].name)
           }

   //get at http://localhost:3001/greet/NAME

   app.get(`/greet/:name`, (req, res) => {
       res.send({

      msg: `Hello, ${req.params.name}.`
       })
   })

   // http://localhost:3001/five

   app.get('/five', (req, res) => {
       res.send(numbers)
      })


   // http://localhost:3001/fruits

   app.get('/fruits', (req, res) => {
       res.send(fruitList)
     })

   // http://localhost:3001/fruits/NAME

     app.get('/fruits/:name', (req, res) => {
       const fruitName = req.params.name
       for (let i = 0 ; i < fruitList.length ; i ++) {
           if (fruitList[i].name == fruitName) {
               res.send(fruitList[i].name)
           }
       }})
    
// http://localhost:3001/veg

app.get('/veg', (req, res) => {
   res.send(vegList)
 })

 // http://localhost:3001/veg/NAME

 app.get('/veg/:name', (req, res) => {
   const vegName = req.params.name
   for (let k = 0 ; k < fruitList.length ; k ++) {
       if (vegList[k].name == vegName) {
           res.send(vegList[k].name)
       }
   }})

   //  http://localhost:3001/fruits/sort


   //this is working when tested separately but not here. 
   app.get('/fruits/sort', (req, res) => {
       
       const fruitSort = fruitList.sort(function (a, b) {
           if (a.name < b.name) {
             return -1
           }
           if (a.name > b.name) {
             return 1
           }
           return 0
         })
      
       res.send(fruitSort)
     })

