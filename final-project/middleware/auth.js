const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    try {
        //spilts the Bearer and the token and verifies the token using the secret key
        req.user = jwt.verify(req.headers.authorization.split(' ')[1], process.env.JWT_SECRET);
        next();
    } catch {
        res.status(401).send('Unauthorized');
    }
};