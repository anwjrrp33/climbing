
const e = require("express");
const jwt = require("./jwt");

module.exports = async (req, res, next) => {
    const accessToken = req.headers["access-token"];
    const refreshToken = req.cookies["refresh-token"];

    const accessVerify = await jwt.verifyToken(accessToken);
    if (accessVerify.success) {
        if (req.method != "GET") {
            req.body.registerId = accessVerify.id;
            req.body.modifyId = accessVerify.id;
        }
        next();
        return;
    }

    const refreshVerify = await jwt.verifyToken(refreshToken);
    if (refreshVerify.success) {
        res.header('access-token', refreshVerify["access-token"]);
        if (req.method != "GET") {
            req.body.registerId = refreshVerify.id;
            req.body.modifyId = refreshVerify.id;
        }
        next();
        return;
    }

    return res.status(400).json(accessToken);
}