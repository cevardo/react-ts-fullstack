import express from 'express'
import dotenv from 'dotenv'
import logger from 'utils/logger'
import routes from './api/routes'
import connectDatabase from 'database'

dotenv.config()

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(routes)

app.listen(PORT, () => {
  logger.info(`⚡️[server]: Server is running at https://localhost:${PORT}`)
})

connectDatabase().then(conn => conn).catch(error => console.log(error))

export default app