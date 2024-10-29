import { redirect } from "@sveltejs/kit";

export async function load({ locals }) {
  if (!locals.isAuthenticated) {
    throw redirect(302, "/");
  }

  return {
    isAuthenticated: locals.isAuthenticated,
    userProfile: locals.userProfile,
  };
}
