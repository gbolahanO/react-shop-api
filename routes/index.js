import { Router } from 'express';

let router = Router();

router.get('', (req, res) => {
  res.send("Hello world");
});

export default router;
