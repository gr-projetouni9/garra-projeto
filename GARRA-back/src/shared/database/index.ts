import { Pool } from 'pg'

console.log(process.env.DB_HOST)

const pool = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: Number(process.env.DB_PORT),
  ssl: false
})

const query = async <T>(text: string) => pool.query<T>(text)

export { query, pool }
