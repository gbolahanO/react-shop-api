import { User } from '../models';
import { hashSync, genSaltSync, compareSync } from 'bcryptjs';
import { sign } from 'jsonwebtoken';

const getAllUsers = async (req, res) => {
  const users = await User.findAll();
  res.json({ users });
}

const signup = async (req, res) => {
  const { name, password, email } = req.body;

  const salt = genSaltSync(10);
  const hashedPassword = hashSync(password, salt);
  await User.create({
    name,
    email,
    password: hashedPassword
  });
  res.json({
    success: 'User created'
  });
}

const login = async (req, res) => {
  const { email, password } = req.body

  const user = await User.findOne({
    where: {
      email
    }
  });
  if (!user) {
    return res.json({ error: 'Invalid email' });
  }
  const verifyPassword = compareSync(password, user.password);
  if (!verifyPassword) {
    return res.json({
      error: 'Invalid password'
    });
  }

  const data = {
    id: user.id,
    name: user.name,
    email: user.email
  }
  const token = sign(data, 'secret', {
    expiresIn: '24h'
  });

  res.send({
    auth: true,
    token
  });

}

export default {
  getAllUsers,
  signup,
  login
}