const { decodeJWT } = require("../helper/jwtHelper");

const authorization = async (req, res, next) => {
  try {
    const token = req.cookies["auth_token"];
    // const headerBearerToken = req.headers["authorization"];
    // if (!headerBearerToken) throw new error();
    if (!token) throw new error();
    // const [_, token] = headerBearerToken.split(" ");
    console.log(token);
    const data = decodeJWT(token);
    console.log("le token decoder :", data);
    if (!data) {
      return res.status(401).send("Invalid Credentials");
    }
    // req.userId = data.id;
    // req.userName = data.name;
    return next();
  } catch (err) {
    console.error(err);
    res.sendStatus(401);
  }
};

module.exports = authorization;
