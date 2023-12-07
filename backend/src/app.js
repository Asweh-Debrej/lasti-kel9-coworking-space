require('dotenv').config();
const express = require('express');
const db = require('./db')

const memberRoutes = require("./routes/member");

const app = express();

const start = async () => {
  const port = process.env.APP_PORT || 5001;

  try {
    app.use(express.json());

    app.use((req, res, next) => {
      console.log(req.path, req.method);
      next();
    });

    await db.connect(process.env.MONGO_URI)

    app.get('/', (req, res) => {
      res.send();
    });

    app.use("/api", memberRoutes)

    app.use("*", (req, res) => {
      res.status(404).send();
    });

    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
    
  } catch (e) {
    console.log(e);

    app.listen(port);

    app.get('*', (req, res) => {
      res.status(503).send();
    });

  }
}

start();
