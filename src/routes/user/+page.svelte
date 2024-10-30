<script lang="ts">
  import Button from "$lib/components/ui/Button.svelte";
  import Input from "$lib/components/ui/Input.svelte";
  import axios from "axios";

  export let data;

  const user = data.userProfile;
  let isLoading = false;
  let value = "";

  const addValue = async () => {
    isLoading = true;
    try {
      const res = await axios.post("/api/addvalue", {
        value,
      });
      console.log("res", res);
    } catch (error) {
      console.log("error", error);
    }
    isLoading = false;
  };
</script>

<main>
  <div
    class="container mx-auto flex py-20 gap-8 items-center justify-center flex-col"
  >
    <div class="rounded-lg shadow-lg p-8 max-w-md w-full">
      <p class="text-center text-2xl font-semibold mb-2">
        Welcome to our app, {user?.given_name || "--"}!
      </p>
      <p class="text-center text-gray-600">
        We're glad to have you here. Enjoy exploring our features!
      </p>
    </div>
    <div class="rounded-lg shadow-lg p-8 max-w-md w-full space-y-4">
      <Input bind:value placeholer="test" label="Enter any text to add value" />
      <Button {isLoading} on:click={addValue}>Add Value</Button>
    </div>
  </div>
</main>
