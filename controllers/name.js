
  
  
  




const getGreet = (req, res) => {
  let id = req.params.name
  console.log(id)
    
    res.send(`Why herro there, ${id}`)
  }

  module.exports = {
    getGreet
  }