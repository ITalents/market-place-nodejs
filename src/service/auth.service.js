const Usuario = require("../model/Usuario");
const jwt = require("jsonwebtoken");

const loginService = (email) => Usuario.findOne({ email: email}).select("senha");

const generateToken = (userId) => jwt.sign({id: userId}, "asdpn2o1432590sdfsndklew9gdfgmprtg90dnswersrsr", { expiresIn: 86400});

module.exports = {
    loginService,
    generateToken
}