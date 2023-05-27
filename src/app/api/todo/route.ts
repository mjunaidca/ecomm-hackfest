import { NextRequest, NextResponse } from "next/server";
import { db, todoTable } from "@/lib/drizzle"
import { sql } from "@vercel/postgres"


export async function GET(request: NextRequest) {
    try {
        await sql`CREATE TABLE IF NOT EXISTS Todos(id serial, Task varchar(255));`

        const res = await db.select().from(todoTable);

        return NextResponse.json({ data: res })
    } catch (err) {
        console.log((err as { message: string }).message)
        return NextResponse.json({ message: "Somthing went wrong" })
    }
}