const { Shop } = require('../../models');
const sequelize = require("sequelize");
const Op = sequelize.Op;


const search = async (req,res) => {
  const { body }  = req
  let condition;  
  let searchList;

  condition = Object.values(body);

  if(condition ? ' ' : '') {
    searchList = await Shop.findAll({limit : 30})
    return res.status(200).json({
      success: true,
      data :searchList
    })
  }
  
  searchList = await Shop.findAll({
    where : {
      [Op.or] : [
        {address : {[Op.substring] : condition,}},
        {title : {[Op.substring] : condition}}
       ]}
    })

  return res.status(200).json({
    success: true,
    data : searchList
  })


  
  // let condition = Object.keys(body) == address ? address: "가게이름"
  

}

module.exports = search