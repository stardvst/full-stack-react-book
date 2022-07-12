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

router.get('/api/v1/users', (req, res, next) => {
  const users = [
    {
      id: 1,
      username: 'John',
    },
    {
      id: 2,
      username: 'Jane',
    },
    {
      id: 3,
      username: 'Jack',
    },
  ];

  console.log(req.query.userid);
  const user = users.find(user => user.id == req.query.userid);
  res.send(`user ${user?.username}`);
});

router.post('/api/v1/groups', (req, res, next) => {
  const groups = [
    {
      id: 1,
      groupname: 'Admins',
    },
    {
      id: 2,
      groupname: 'Users',
    },
    {
      id: 3,
      groupname: 'Employees',
    },
  ];

  const group = groups.find(group => group.id == req.body.groupid);
  res.send(`group ${group?.groupname}`);
});

// app.use((req, res, next) => {
//   throw new Error('a failure occurred');
// });

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
