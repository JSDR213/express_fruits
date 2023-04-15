
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
    const name = req.params.name
    const specificVeg = veggies.find(({name}) => name)
    console.log(specificVeg)
    res.send(specificVeg)
  }

  module.exports = {
    getVeggies,
    getVeg
  }