import pg from 'pg'

//Connection Pool Object
const config = {
    user: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    host: process.env.PGHOST,
    port: process.env.PGPORT,
    database: process.env.PGDATABASE,
    ssl: {
        rejectUnauthorized: false
    }
}
//Notice that we're telling the config objects that itll find its data
//in the environment variables, so we have to make them
export const pool = new pg.Pool(config)