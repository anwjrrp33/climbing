const sequelize = require("sequelize");
const { User } = require("../../models");

async function signUp(user) {
    let findUser = await User.findOne({
        order: [
            ['id', 'DESC']
        ]
    });

    user.id = findUser == null ? 1 : findUser.id + 1;

    const count = await User.count({
        where: { email: user.email }
    });

    if (count == 0) {
        await User.create(user);
    }
}

module.exports = {
    signUp
}