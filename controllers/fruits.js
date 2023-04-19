
let fruits = [
    { name: "Tomato"},
    { name: "Banana"},
    { name: "Peach"},
    { name: "Pear"},
    { name: "Strawberry"}
    
  ];
  
  
  const sortFruits = fruits.sort(function (a, b) {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  }) 

  console.log(sortFruits)

const getFruits = (req, res) => {
    res.send(fruits)
  }


const getFruit = (req, res) => {
    const nameOfFruit = req.params.name
    const specificFruit = fruits.find(({name}) => name === nameOfFruit)
    res.send(specificFruit)
  }


const getFruitsSort = (req, res) => {

    res.send(fruits)
    console.log(sortFruits)
  
    
  }

  module.exports = {
    getFruits,
    getFruit,
    getFruitsSort
  }