require('dotenv').config();
const jwt = require('jsonwebtoken');
const SECRET_KEY = process.env.SECRET_KEY;
const { User } = require('../../models');

async function createToken(user) {
    const findUser = User.findOne({
        where: { email: user.email }
    });

    if (findUser) {
        const token = jwt.sign({
            email: findUser.email
        }, SECRET_KEY, {
            expiresIn: '1h'
        });

        return token;
    }
}

async function createRefreshToken(user) {
    const findUser = User.findOne({
        where: { email: user.email }
    });

    if (findUser) {
        const token = jwt.sign({
            email: findUser.email
        }, SECRET_KEY, {
            expiresIn: '14d'
        });

        return token;
    }
}

module.exports = {
    createToken,
    createRefreshToken
}