import jwt, { SignOptions } from 'jsonwebtoken';

const secret = process.env.JWT_SECRET || 'secret';

export function createToken(body:number) {
  const payload = {
    id: body,
  };
  const config: SignOptions = {
    expiresIn: '7d',
    algorithm: 'HS256',
  };

  const token = jwt.sign(payload, secret, config);
  return token;
}
export function validateTokenUser(token: string) {
  const verify = jwt.verify(token, 'secret');
  return verify;
}