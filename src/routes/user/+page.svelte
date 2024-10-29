<script lang="ts">
  export let data;

  const user = data.userProfile;
</script>

<main>
  <div class="container mx-auto flex py-20 items-center justify-center">
    <div class="   rounded-lg shadow-lg p-8 max-w-md w-full">
      <p class="text-center text-2xl font-semibold mb-2">
        Welcome to our app, {user?.given_name || "--"}!
      </p>
      <p class="text-center text-gray-600">
        We're glad to have you here. Enjoy exploring our features!
      </p>
    </div>
  </div>
</main>
