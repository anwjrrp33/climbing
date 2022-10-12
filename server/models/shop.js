const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    return sequelize.define("Shop", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            comment: "고유번호"
        },
        title: {
            type: DataTypes.STRING,
            comment: "제목"
        },
        address: {
            type : DataTypes.STRING,
            comment : '주소'
        },
        content: {
            type: DataTypes.STRING,
            comment: "내용"
        },
        openTime : {
            type : DataTypes.STRING,
            comment : '오픈시간'
        },
        closeTime : {
            type : DataTypes.STRING,
            comment : '닫는 시간'
        },
        price : {
            type : DataTypes.STRING,
            comment : '가격'
        }, 
    },{
        charset: "utf8", // 한국어 설정
        collate: "utf8_general_ci", // 한국어 설정
        timestamps: true, // createAt & updateAt 활성화
    })}