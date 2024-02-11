import { NextFunction, Request, Response} from "express";
import jwt, { JwtPayload } from 'jsonwebtoken';

declare global {
    namespace Express {
        interface Request {
            userId: string;
        }
    }
} //Añadir la propiedad userId en el tipo Request del namespace de Express

const verifyToken = (req: Request, res:Response, nex:NextFunction) => {
    const token = req.cookies["auth_token"];
    if (!token) {
        return res.status(401).json({message: "unauthorized"})
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY as string)
        req.userId = (decoded as JwtPayload).userId;
        nex();
    } catch(error) {
        return res.status(401).json({message: "unauthorized"})
    }
}

export default verifyToken;