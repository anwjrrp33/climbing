const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    const Shop = sequelize.define('Shop', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            comment: "고유번호"
        },
        title: {
            type: DataTypes.STRING,
            comment: "제목"
        },
        content: {
            type: DataTypes.STRING,
            comment: "내용"
        },
        address: {
            type: DataTypes.DATE,
            comment: "작성일"
        },
        openTime: {
            type: DataTypes.STRING,
            comment: "작성자"
        },
        closeTime: {
            type: DataTypes.DATE,
            comment: "수정일"
        },
        price: {
            type: DataTypes.STRING,
            comment: "수정자"
        },
      
    }, {
        charset: "utf8",
        collate: "utf8_general_ci",
        tableName: "Shop",
        timestamps: true,
    });

 

    return Shop;
}