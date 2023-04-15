const express = require('express')
const cors = require('cors')
const PORT = process.env.PORT || 3001
const name = require('./controllers/name.js')
const five = require('./controllers/five.js')
const fruit = require('./controllers/fruits.js')
const veg = require('./controllers/veggies.js')



const app = express()

app.use(cors())
app.use(express.json())

// Routes go here

app.listen(PORT, () => console.log(`Serving up delicious fruits on port ${PORT} 🍒`))

app.get('/', (request, response) => {
  console.log('Living the dream')
  response.send({ msg: 'Living the dream' })
  
  
})


app.get('/greet/:name', name.getGreet)
app.get('/five', five.getFive)
app.get('/fruits', fruit.getFruits)
app.get('/fruits/:name', fruit.getFruit)
app.get('/fruits/sort', fruit.getFruitsSort)
app.get('/veggies', veg.getVeggies)
app.get('/veggies/:name', veg.getVeg)

/*
app.get('/apts', apartments.getApts)
app.get('/houses', houses.getHouses)

app.get('/houses/:id', houses.getHouse)
*/
