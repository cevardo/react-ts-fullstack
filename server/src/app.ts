import express from 'express'
import dotenv from 'dotenv'
import path from 'path'

dotenv.config()

const app = express();
const PORT = process.env.PORT;

app.get('/', (req, res) => res.send('Express + TypeScript Server'));

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});