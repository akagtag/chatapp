import jwt from "jsonwebtoken";

const generateToken = (userId, res) => {
    const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
        expiresIn: "7d",
    });

    res.cookie("jwt", token, {
        maxAge: 7 * 24 * 60 * 60 * 1000, //7 days
        httpOnly: true, //prevent cookie access from javascript(xss or something)
        sameSite: "strict",
        secure: process.env.NODE_ENV === "production" ? true : false,
    });
};

export default generateToken;
