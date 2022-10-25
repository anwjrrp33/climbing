
const e = require("express");
const jwt = require("./jwt");

module.exports = async (req, res, next) => {
    const accessToken = req.headers["access-token"];
    const verify = await jwt.verifyToken(accessToken);

    if (verify.success) {
        if(req.method != "GET") {
            console.log(verify.id);
            req.body.registerId = verify.id;
            req.body.modifyId = verify.id;
        }
        next();
        return;
    }

    return res.status(400).json(verify);
}