require('dotenv').config();
const jwt = require('jsonwebtoken');
const SECRET_KEY = process.env.SECRET_KEY;
const { User } = require('../../models');

async function createToken(user) {
    const findUser = await User.findOne({
        where: { email: user.email }
    });

    if (findUser) {
        const token = jwt.sign({
            id: findUser.id,
            email: findUser.email
        }, SECRET_KEY, {
            expiresIn: '1h'
        });

        return token;
    }
}

async function createRefreshToken(user) {
    const findUser = await User.findOne({
        where: { email: user.email }
    });

    if (findUser) {
        const token = jwt.sign({
            id: findUser.id,
            email: findUser.email
        }, SECRET_KEY, {
            expiresIn: '14d'
        });

        return token;
    }
}

async function verifyToken(token) {
    try {
        const decode = jwt.verify(token, process.env.SECRET_KEY);
        return {
            success: true,
            id: decode.id,
            email: decode.email
        };
    } catch (err) {
        return { 
            success: false,
            message: err.message
        }
    }
}

module.exports = {
    createToken,
    createRefreshToken,
    verifyToken
}