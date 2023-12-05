require('dotenv').config();
const express = require('express');
const connectDB = require('./db/mongoose');

const app = express();

const start = async () => {
  const port = process.env.APP_PORT || 5001;

  try {
    app.use(express.json());
    app.use((req, res, next) => {
      console.log(req.path, req.method);
      next();
    });

    await connectDB();

    app.get('/health', (req, res) => {
      res.send('Server is up and running');
    });

    app.use("*", (req, res) => {
      res.status(404).send();
    });

    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (e) {
    console.log(e);
    app.get('/health', (req, res) => {
      res.send('Server is down');
    });
  }
}

start();
