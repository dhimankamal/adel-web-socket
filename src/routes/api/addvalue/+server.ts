import { json } from "@sveltejs/kit";
import { db } from "$lib/db";
import { myTable } from "$lib/db/schema";

export async function POST({ request }) {
  try {
    const { value } = await request.json();
    const res = await db
      .insert(myTable)
      .values({ value, userid: "22" })
      .returning();
    return json({ success: true, res });
  } catch (error) {
    console.log("error", error);
    return json({ success: false, error });
  }
}
