import jwt from 'jsonwebtoken'

const auth = (req, res, next) =>{
    try {
        const token = req.headers.authorization.split(' ')[1]

        if (!token) {
            res.status(404).json({ success: false, message: "Login to access" });
            return;
        }

        let decodeData = jwt.verify(token, process.env.JWT_SECRET )
        req.userId = decodeData?.id

        next();
    } catch (error) {
        res.status(500).json({ success: false, message: "something went wrong" });
        console.log(error)
    }
}

export default auth;