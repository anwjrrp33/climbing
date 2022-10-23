const sequelize = require("sequelize");
const { User } = require("../../models");
const sequelize = require("sequelize");

async function signUp(user) {
    const count = await User.count({
        where: { email: user.email }
    });

    if (count == 0) {
        await Mate.create(user);
    }
}

module.exports = {
    signUp
}