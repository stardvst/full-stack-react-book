import express from 'express';

const app = express();

const router = express.Router();
router.get('/a', (req, res, next) => {
  res.send('hello from the other side, a');
});

router.post('/b', (req, res, next) => {
  res.send('hello from the other side, b');
});

app.use(router);

app.use((req, res, next) => {
  console.log('first middleware');
  next();
});

app.use((req, res, next) => {
  res.send('hello world, i am a custom middleware');
});

const PORT = 8000;
app.listen({ port: PORT }, () => {
  console.log(`Express Node server is running on port ${PORT}`);
});
