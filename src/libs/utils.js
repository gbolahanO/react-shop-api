import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

export const generateToken = data => {
  const token = jwt.sign(data, 'secret', {
    expiresIn: '24h'
  });
  return token;
}

export const decryptToken = token => {
  const data = jwt.verify(token, 'secret');
  return data;
};

export const hashPassword = password => {
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(password, salt);
  return hash;
}

export const comparePassword = (password, hashedPassword) => {
  return bcrypt.compareSync(password, hashedPassword)
}

export const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization.split(' ')[1] || '';

  if (token) {
    next();
    return;
  }

  res.json({ message: 'Unauthorized please login', token });
}