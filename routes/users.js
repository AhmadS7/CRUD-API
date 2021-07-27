import express from 'express';
import { v4 as uuidv4 } from 'uuid';

const router = express.Router();
let users = [
  // {
  //   firstName: 'Sahil',
  //   lastName: 'Hussain',
  //   age: 25,
  // },
  // {
  //   firstName: 'SHiang',
  //   lastName: 'Lang',
  //   age: 30,
  // },
];

// all routes in here are starting with /users
router.get('/', (req, res) => {
  res.send(users);
});

router.post('/', (req, res) => {
  const user = req.body;
  users.push({ ...user, id: uuidv4() });
  res.send(`User with the name ${user.firstName} added to the database`);
});

// /users/2 => req.params {id: 2}
router.get('/:id', (req, res) => {
  const { id } = req.params;
  const foundUser = users.find((user) => user.id === id);

  res.send(foundUser);
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;

  users = users.filter((user) => user.id !== id);

  res.send(`users with the id ${id} deleted from the database`);
});

export default router;
