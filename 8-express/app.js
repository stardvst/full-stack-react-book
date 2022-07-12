import express from 'express';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.json());

const router = express.Router();
router.get('/a', (req, res, next) => {
  res.send('hello from the other side, a');
});

router.post('/b', (req, res, next) => {
  res.send(`hello from the other side, b. message is ${req.body.message}`);
});

app.use((req, res, next) => {
  throw new Error('a failure occurred');
});

app.use(router);

app.use((req, res, next) => {
  console.log('first middleware');
  next();
});

app.use((req, res, next) => {
  res.send('hello world, i am a custom middleware');
});

app.use((err, req, res, next) => {
  res.status(500).send(err.message);
});

const PORT = 8000;
app.listen({ port: PORT }, () => {
  console.log(`Express Node server is running on port ${PORT}`);
});
