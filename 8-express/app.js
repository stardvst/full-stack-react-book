import express from 'express';

const app = express();

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
