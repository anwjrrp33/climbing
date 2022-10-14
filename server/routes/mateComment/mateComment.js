const { MateComment } = require("../../models");
const sequelize = require("sequelize");
const Op = sequelize.Op;

async function list(req, res, next) {
    let mateId = req.params.mateId;
    let page = !req.param("page") ? 1 : req.param("page");
    let limit = 10;
    let offset = 0;

    if (page > 1) {
        offset = limit * (page - 1);
    }

    const mateComments = await MateComment.findAndCountAll({
        where: {
            mateId: mateId,
            parentId: null
        },
        order: [['id', 'DESC']],
        offset: offset,
        limit: limit
    });

    return res.status(200).json({ success: true, mateComments: mateComments });
}

async function parentList(req, res, next) {
    let parentId = req.params.parentId;
    let page = !req.param("page") ? 1 : req.param("page");
    let limit = 10;
    let offset = 0;

    if (page > 1) {
        offset = limit * (page - 1);
    }

    const mateComments = await MateComment.findAndCountAll({
        where: {
            parentId: parentId
        },
        order: [['id', 'DESC']],
        offset: offset,
        limit: limit
    });

    return res.status(200).json({ success: true, mateComments: mateComments });
}

async function register(req, res, next) {
    let mateId = req.params.mateId;
    let mateComment = await MateComment.findOne({
        order: [
            ['id', 'DESC']
        ]
    });
    
    await MateComment.create({
        id: mateComment == null ? 1 : mateComment.id + 1,
        parentId: req.body.parentId,
        content: req.body.content,
        registerDate: new Date(),
        registerId: req.body.registerId,
        modifyDate: new Date(),
        modifyId: req.body.modifyId,
        mateId: mateId
    });

    return res.status(200).json({ success: true });
}

async function modify(req, res, next) {
    let id = req.params.id;

    await MateComment.update({
        content: req.body.content,
        modifyDate: new Date(),
        modifyId: req.body.modifyId
    }, {
        where: { id: id }
    });

    return res.status(200).json({ success: true });
}

async function remove(req, res, next) {
    let id = req.params.id;

    await MateComment.destroy({
        where: {
            [Op.or]: [
                { id: id },
                { parentId: id }
            ]
        }
    });

    return res.status(200).json({ success: true });
}

module.exports = {
    list,
    parentList,
    register,
    modify,
    remove
}