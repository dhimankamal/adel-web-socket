<script lang="ts">
  import { goto } from "$app/navigation";
  import Button from "$lib/components/ui/Button.svelte";
</script>

<svelte:head>
  <title>Next Adventure</title>
</svelte:head>

<main>
  <div class="h-screen w-screen flex items-center justify-center">
    <div class="">
      <h1 class="text-3xl font-bold text-center mb-6">
        Welcome to Your Next Adventure
      </h1>
      <div class="flex gap-4 flex-col">
        <Button on:click={() => goto("/api/auth/login")}>Login</Button>
        <Button on:click={() => goto("/api/auth/register")} varient="secondary"
          >Signup</Button
        >
      </div>
    </div>
  </div>
</main>
