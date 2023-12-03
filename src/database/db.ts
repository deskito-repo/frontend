import { SQLocalDrizzle } from 'sqlocal/drizzle';
import { drizzle } from 'drizzle-orm/sqlite-proxy';

const { driver } = new SQLocalDrizzle('database.sqlite3');
export const db = drizzle(driver);
// await migrate(db);
