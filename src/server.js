import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { v4 as uuidv4 } from 'uuid';

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

let tasks = [
  { _id: uuidv4(), title: 'First Task', completed: false },
  { _id: uuidv4(), title: 'Second Task', completed: true },
];

app.get('/', (req, res) => {
  res.json(tasks);
});

app.post('/create', (req, res) => {
  const { title } = req.body;
  const newTask = { _id: uuidv4(), title, completed: false };
  tasks.push(newTask);
  res.json(newTask);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
