import { Router } from 'express';
import { User } from '../models';
import { hashSync, genSaltSync, compareSync } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
let router = Router();

router.get('', async (req, res) => {
  const users = await User.findAll();
  res.json({ users });
});

router.post('/create', async (req, res) => {
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
});

router.post('/login', async (req, res) => {
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
    expiresIn: '24'
  });

  res.send({
    auth: true,
    token
  });

})

export default router;