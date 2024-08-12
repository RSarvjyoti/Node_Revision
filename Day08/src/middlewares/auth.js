const jwt = require("jsonwebtoken");
const tokenBlockModel = require("../models/blockTokenModel");
require("dotenv").config();

const auth = async (req, res, next) => {
    const header = req.headers.authorization;

    // Check if the Authorization header is present
    if (!header) {
        return res.status(401).json({ message: "Authorization header is not present" });
    }

    // Ensure the header starts with 'Bearer '
    if (!header.startsWith("Bearer ")) {
        return res.status(400).json({ message: "Invalid token format" });
    }

    // Extract the token
    const token = header.split(" ")[1];

    // Check if the token is in the blocklist
    const blockListCheck = await tokenBlockModel.findOne({ token: token });

    if (blockListCheck) {
        return res.status(403).json({ message: "This token is invalid. Please obtain a new token." });
    }

    // Verify the token
    jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
        if (err) {
            return res.status(400).json({ message: err.message });
        }
        req.user = decoded; // Attach the decoded token to the request object
        next();
    });
    
};

module.exports = auth;
