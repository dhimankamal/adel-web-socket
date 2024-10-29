<script lang="ts">
  import Header from "$lib/components/Header.svelte";
  import type { LayoutServerData } from "./$types";

  export let data: LayoutServerData;
</script>

<Header user={data.userProfile} />
<slot />
