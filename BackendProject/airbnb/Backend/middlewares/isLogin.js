import jwt from "jsonwebtoken";
export const isLogin = (req, res, next) => {
    try {
       

        let token = req.cookies?.token;
     

        if (!token) {
            return res.status(401).json({
                message: "Token not found, please login",
                success: false
            });
        }

        const { userId } = jwt.verify(token, process.env.JWT_SECRET);

        req.id = userId;
        next();

    } catch (err) {
        console.log("JWT Error:", err.message);

        return res.status(401).json({
            message: "Invalid token"
        });
    }
};