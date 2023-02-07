import jwt, { SignOptions } from 'jsonwebtoken';

const secret = process.env.JWT_SECRET || 'secret';

export default function createToken(userId:number) {
  // const payload = {
  //   userId: body,
  // };
  const config: SignOptions = {
    expiresIn: '7d',
    algorithm: 'HS256',
  };

  const token = jwt.sign({ userId }, secret, config);
  return token;
}
