import { Connection, createConnection } from "typeorm";
import logger from 'utils/logger'


async function connectDatabase(): Promise<Connection> {
  try {
    const db: Connection = await createConnection()
    logger.info('Database connection created')
    return db
    
  } catch(error) {
    logger.error(error)
  }
}

export default connectDatabase