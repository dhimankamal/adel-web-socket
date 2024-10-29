<script lang="ts">
  import type { UserType } from "@kinde-oss/kinde-auth-sveltekit";
  import Button from "./ui/Button.svelte";
  import { goto } from "$app/navigation";

  export let user: UserType | null;
</script>

<header>
  <nav class="container mx-auto flex justify-between items-center py-4">
    <h1 class="text-display-3">Next Adventure</h1>

    <div class="flex justify-between items-center gap-8">
      <div class="avatar">
        {user?.given_name || user?.email}
      </div>
      <div class="flex gap-4 items-center">
        <Button on:click={() => goto("/api/auth/logout")} class="bg-red-400">
          Sign out</Button
        >
      </div>
    </div>
  </nav>
</header>
