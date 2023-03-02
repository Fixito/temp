require('express-async-errors');
const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

app.get('/', (_req, res) => res.status(200).send('Hello world'));

app.post('/api/v1/post', (req, res) => {
  console.log(req.headers.authorization);
  const { username, email, topping } = req.body;

  res.status(200).json({ username, email, topping });
});

app.use((_req, res) => res.status(404).send("La route n'existe pas"));
app.use((error, _req, res, _next) => {
  res.status(500).json({ msg: error.message });
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Le servur écoute sur le port ${port}`));
