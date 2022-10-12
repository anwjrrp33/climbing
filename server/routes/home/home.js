const { Shop } = require('../../models');



const home = async (req, res) => {
  try{
      const updateList = await Shop.findAll({
        attributes : ['id','title','address','price'],
        order : [['updatedAt', 'DESC']],
        limit : 10
      })  // 최근에 업데이트 한 매장 순 최대 10개 
      return res.status(200).json({data : {updateList}})


  }catch(e) {
    console.log(e)
  }
}



module.exports = home