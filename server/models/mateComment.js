const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    const MateComment = sequelize.define('MateComment', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            comment: "고유번호"
        },
        parentId: {
            type: DataTypes.INTEGER,
            comment: "부모 고유번호"
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
        freezeTableName: true,
        tableName: "MateComment",
        timestamps: false,
        paranoid: true
    });

    MateComment.associate = function (models) {
        MateComment.belongsTo(models.Mate, {
            foreignKey: 'mateId',
            targetKey: 'id',
            onDelete: 'cascade'
        });
    }

    return MateComment;
}