const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    var User = sequelize.define("User", {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        comment: "고유번호",
      },
      email: {
        type: DataTypes.STRING,
        validate: {
          isEmail: true,
        },
        comment: "이메일",
      },
      nickname: {
        type: DataTypes.STRING,
        comment: "이름",
      }
    }, {
      charset: "utf8", // 한국어 설정
      collate: "utf8_general_ci", // 한국어 설정
      tableName: "User", // 테이블 이름      
      timestamps: true, // createAt & updateAt 활성화
      paranoid: true, // timestamps 가 활성화 되어야 사용 가능 > deleteAt 옵션 on
    });
  
    return User;
  };