const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    const Mate = sequelize.define('Mate', {
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
        registerDate: {
            type: DataTypes.DATE,
            comment: "작성일"
        },
        registerId: {
            type: DataTypes.STRING,
            comment: "작성자"
        },
        modifyDate: {
            type: DataTypes.DATE,
            comment: "수정일"
        },
        modifyId: {
            type: DataTypes.STRING,
            comment: "수정자"
        }
    }, {
        charset: "utf8",
        collate: "utf8_general_ci",
        tableName: "Mate",
        timestamps: false,
        paranoid: true
    });

    Mate.associate = function (models) {
        models.Mate.hasMany(models.MateComment, {
            foreignKey: 'mateId',
            sourceKey: "id",
            onDelete: 'cascade'
        });
    };

    return Mate;
}