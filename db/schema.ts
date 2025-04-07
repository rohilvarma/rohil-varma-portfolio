import { pgTable, serial, text, varchar } from "drizzle-orm/pg-core";

export const guestbook = pgTable("guestbook", {
  id: serial().primaryKey(),
  name: varchar({ length: 100 }).notNull(),
  comment: text().notNull(),
  email: varchar({ length: 100 }).notNull().unique()
});


export type SelectComment = typeof guestbook.$inferSelect;
export type InsertComment = typeof guestbook.$inferInsert;