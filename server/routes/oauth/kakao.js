const axios = require("axios");
const user = require("../user/user");
const jwt = require("../middleware/jwt");

async function redirect(req, res, next) {
    const url = "https://kauth.kakao.com/oauth/authorize";
    const config = {
      client_id: "f3fe0df0786221c26b21a278c23eb7f5",
      redirect_uri: "http://localhost:5000/oauth/kakao/token",
      response_type: "code",
    };
    const params = new URLSearchParams(config).toString();

    return res.redirect(`${url}?${params}`);
}

async function token(req, res, next) {
    const url = "https://kauth.kakao.com/oauth/token";
    const config = {
        client_id: "f3fe0df0786221c26b21a278c23eb7f5",
        grant_type: "authorization_code",
        redirect_uri: "http://localhost:5000/oauth/kakao/token",
        code: req.query.code,
    };
    const params = new URLSearchParams(config).toString();
    const kakaoToken = await axios.post(`${url}?${params}`, {
        headers: {
            "Content-Type": "application/json"
        }
    });

    const tokenData = kakaoToken.data;

    const kakaoUser = await axios.post('https://kapi.kakao.com/v2/user/me', {}, {
        headers: {
            "Content-Type": "application/json",
            'Authorization': `Bearer ${tokenData.access_token}`
        }
    });

    const userData = kakaoUser.data;

    await user.signUp({
        email: userData.kakao_account.email,
        nickname: userData.properties.nickname
    });

    const token = await jwt.createToken({
        email: userData.kakao_account.email,
        nickname: userData.properties.nickname
    });

    const refreshToken = await jwt.createRefreshToken({
        email: userData.kakao_account.email,
        nickname: userData.properties.nickname
    });
    
    if (token && refreshToken) {
        res.header('access-token', token);
        res.cookie('refresh-token', refreshToken);
        res.redirect("http://localhost:5000/mate");
    }
}

module.exports = {
    redirect,
    token
}