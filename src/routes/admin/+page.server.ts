import { db } from "$lib/db";
import { myTable } from "$lib/db/schema";
import type { PageServerLoad } from "./$types";

export const load = (async () => {
  const result = await db.select().from(myTable);
  console.log("result", result);
  return {
    result,
  };
}) satisfies PageServerLoad;
