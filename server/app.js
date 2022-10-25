require("dotenv").config();


const express = require('express');
const app = express();  
const port = process.env.PORT || 5000;
const  { sequelize } = require('./models/index')


// 기존 테이블 삭제 후 생성
// 서버 실행시 MYSQL과 연결
sequelize.sync({ force: false }) // 서버 실행시마다 테이블을 재생성할건지에 대한 여부
  .then(() => {
    console.log('데이터베이스 연결 성공');
  })
  .catch((err) => {
    console.log('aa')
    console.error(err);
  });

const cookieParser = require("cookie-parser");
app.use(express.json());
app.use(cookieParser());

//모든 router 
const mainRouter = require('./routes')

app.use('/', mainRouter);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});