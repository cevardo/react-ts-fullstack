import express from 'express'
import dotenv from 'dotenv'
import logger from 'utils/logger'

dotenv.config()

const app = express();
const PORT = process.env.PORT;

app.get('/', (req, res) => res.send('Express + TypeScript Server'));

app.listen(PORT, () => {
  logger.info(`⚡️[server]: Server is running at https://localhost:${PORT}`)
})