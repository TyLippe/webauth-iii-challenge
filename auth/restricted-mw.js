const jwt = require('jsonwebtoken');

const secrets = require('../config/secrets.js');

module.exports = (req, res, next) => {
    const token = req.headers.authorization;

    if (token) {
        jwt.verify(token, secrets.jwtSecret, (err, decodedToken) => {
            if (err) {
                res.status(401).json({ message: 'Unable to login' });
            } else {
                req.jwtToken = decodedToken;
                next();
            }
        });
    } else {
        res.status(400).json({ message: 'No token provided' });
    }
};