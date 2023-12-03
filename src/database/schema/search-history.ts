import { sqliteTable, int, text } from 'drizzle-orm/sqlite-core';

export const searchHistory = sqliteTable('search_history', {
  id: int('id').primaryKey({ autoIncrement: true }),
  text: text('text').notNull(),
  atCreated: int('created_at').notNull().default(new Date().valueOf()),
});
