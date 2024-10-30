<script lang="ts">
  import clsx from "clsx";

  import { fade } from "svelte/transition";

  import Loader from "./Loader.svelte";

  let btnClass: string = "";
  export { btnClass as class };

  
  export let isLoading = false;
  export let disabled = false;
  export let varient: "primary" | "secondary" = "primary";
  export let size: "md" | "sm" = "md";
</script>

<button
  on:click
  {...$$restProps}
  {disabled}
  class={clsx(
    "text-m flex h-fit whitespace-nowrap flex-row items-center justify-center gap-2 rounded-md font-semibold transition-all duration-300  hover:shadow-lg  disabled:opacity-25",
    {
      "bg-orange-400 text-white": varient === "primary",
      "bg-gray-200 text-gray-800": varient === "secondary",
      "px-8 py-3 text-12": size === "md",
      "px-4 py-2 text-12": size === "sm",
    },
    btnClass
  )}
>
  {#if isLoading}
    <div in:fade={{ duration: 500 }} class="relative">
      <span class="invisible">loading</span>
      <Loader
        class="absolute bottom-0 left-0 right-0 top-0 h-full w-full "
      />
    </div>
  {:else}
    <slot />
  {/if}
</button>
