import {
    integer,
    pgTable,
    serial,
    varchar,
} from "drizzle-orm/pg-core";
import { drizzle } from "drizzle-orm/vercel-postgres"
import { sql } from "@vercel/postgres";

export const cartTable = pgTable("cart", {
    id: serial("id").primaryKey(),
    user_id: varchar("user_id", {
        length: 255,
    }).notNull(),
    product_id: varchar("product_id", {
        length: 255,
    }).notNull(),
    quantity: integer("quantity").notNull(),
})

export const userStripeTable = pgTable("user_stripe", {
    user_id: varchar("user_id", {
        length: 255,
    }).notNull(),
    stripe_id: varchar("stripe_id", {
        length: 255,
    }).notNull().primaryKey(),
})


export const db = drizzle(sql);


