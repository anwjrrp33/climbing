const db = require('../../models');
const {Op} = require('sequelize');


const search = async (req,res) => {
  try{
    const data = req.body;
    const searchCon = Object.keys(data)  // db 조건 
    const searchValue = Object.values(data) //db value
    
    if(searchCon.length == 0) { // 검색 조건 없을 때 
      const noSearch = await db.Shop.findAll({
        order: [["updatedAt", "desc"]]
      })
     return  res.json({
      success : true,
      data :noSearch
     })
    }
    const results = await db.Shop.findAll({ // 검색 조건 있을 때
      where : {
        [searchCon] : {
          [Op.substring] : searchValue
        }
      }
    })
    return res.json({
      success : true,
      data :results})

  }catch(e) {
    console.log(e)
  }

}

module.exports = search