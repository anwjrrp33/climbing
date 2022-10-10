const { Mate } = require("../../models");

async function list(req, res, next) {

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

module.exports = {
    list,
    register
}