import express from 'express';
const router = express.Router();

router.get('/', async (req, res) => {
  if (req.session.user) {
    await req.session.destroy();
    res.clearCookie('user_sid');
    return res.end();
  }
  return res.end();
});

export default router;
