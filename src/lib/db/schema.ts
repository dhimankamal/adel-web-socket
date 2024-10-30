import { pgTable, serial, text } from "drizzle-orm/pg-core";

export const myTable = pgTable("datatable", {
  id: serial("id").primaryKey(),
  userid: text("userid"),
  value: text("value"),
});
