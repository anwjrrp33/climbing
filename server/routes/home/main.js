const db = require('../../models')

const main = async (req,res) => {
try{
const shops   = await db.Shop.findAll({})
const noSearch = await db.Shop.findAll({
    order: [["updatedAt", "desc"]]
  })
  return res.json({
    success: true,
    data : {
      list : shops,
      updateList : noSearch
    }
  })

  
}catch(e) {

}



}


module.exports = main