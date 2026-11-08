import express from 'express';
import cors from 'cors';
import { config } from './config.js';

const app = express();

app.use(cors());
app.use(express.json());

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Server is running!' });
});

app.listen(config.port, () => {
  console.log(`Server started at http://localhost:${config.port}`);
});
