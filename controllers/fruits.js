
let fruits = [
    { name: "Tomato"},
    { name: "Banana"},
    { name: "Peach"},
    { name: "Pear"},
    { name: "Strawberry"}
    
  ];
  
  
  


const getFruits = (req, res) => {
    res.send(fruits)
  }


const getFruit = (req, res) => {
    const name = req.params.name
    const specificFruit = fruits.find(({name}) => name)
    console.log(specificFruit)
    res.send(specificFruit)
  }

  const getFruitsSort = (req, res) => {
    let sortFruits = fruits.sort()
    res.send(sortFruits)
  }

  module.exports = {
    getFruits,
    getFruit,
    getFruitsSort
  }