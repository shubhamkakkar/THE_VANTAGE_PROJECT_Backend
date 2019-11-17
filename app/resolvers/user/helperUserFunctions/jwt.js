import {sign, verify} from "jsonwebtoken"

const secretKey = "internshipTask-user-auth";

export const jwtToken = ({email}) => sign({email}, secretKey);
export const JWTVerify = (token) => verify(token, secretKey);
