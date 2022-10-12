const { Mate } = require("../../models");
const sequelize = require("sequelize");
const Op = sequelize.Op;

async function list(req, res, next) {
    let search = !req.param("search") ? "" : req.param("search");
    let page = !req.param("page") ? 1 : req.param("page");
    let limit = 10;
    let offset = 0;

    if (page > 1) {
        offset = limit * (page - 1);
    }

    const mates = await Mate.findAndCountAll({
        where: {
            [Op.or]: [
                { title: { [Op.like]: '%' + search + "%" } },
                { content: { [Op.like]: '%' + search + "%" } }
            ]
        },
        order: [['id', 'DESC']],
        offset: offset,
        limit: limit
    });

    return res.status(200).json({ success: true, mates: mates });
}

async function register(req, res, next) {
    let mate = await Mate.findOne({
        order: [
            ['id', 'DESC']
        ]
    });
    
    await Mate.create({
        id: mate == null ? 1 : mate.id + 1,
        title: req.body.title,
        content: req.body.content,
        registerDate: new Date(),
        registerId: req.body.registerId,
        modifyDate: new Date(),
        modifyId: req.body.modifyId
    });

    return res.status(200).json({ success: true });
}

async function read(req, res, next) {
    let id = req.params.id;

    let mate = await Mate.findOne({
        where: { id: id }
    });

    return res.status(200).json({ success: true, mate: mate });
}

async function modify(req, res, next) {
    let id = req.params.id;

    await Mate.update({
        title: req.body.title,
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

    await Mate.destroy({
        where: { id: id }
    });

    return res.status(200).json({ success: true });
}

module.exports = {
    list,
    register,
    read,
    modify,
    remove
}