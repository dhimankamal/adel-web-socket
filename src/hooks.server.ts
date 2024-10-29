import {
  sessionHooks,
  kindeAuthClient,
  type SessionManager,
  type Handler,
  type UserType,
} from "@kinde-oss/kinde-auth-sveltekit";

export const handle: Handler = async ({ event, resolve }) => {
  // Initialize session handling
  sessionHooks({ event });

  // Variables for authentication status and user profile
  let isAuthenticated = false;
  let userProfile: UserType | null = null;

  try {
    // Check if the user is authenticated
    isAuthenticated = await kindeAuthClient.isAuthenticated(
      event.request as unknown as SessionManager,
    );

    if (isAuthenticated) {
      userProfile = await kindeAuthClient.getUser(
        event.request as unknown as SessionManager,
      );
    }
  } catch (error) {
    console.error("Authentication error:", error);
  }

  // Store authentication data in event.locals for access in layouts/pages
  event.locals.isAuthenticated = isAuthenticated;
  event.locals.userProfile = userProfile;

  // Continue with the request
  const response = await resolve(event);
  return response;
};
