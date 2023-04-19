
const veggies = [
    { name: "Eggplant"},
    { name: "Cucumber"},
    { name: "Carrot"},
    { name: "Daikon"},
    { name: "Jalapeno"}
    
  ];
  
  
  


const getVeggies = (req, res) => {
    res.send(veggies)
  }


const getVeg = (req, res) => {
    const nameOfVeggie = req.params.name
    const specificVeg = veggies.find(({name}) => name === nameOfVeggie)
    res.send(specificVeg)
  }

  module.exports = {
    getVeggies,
    getVeg
  }