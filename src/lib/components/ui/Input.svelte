<script lang="ts">
  import clsx from "clsx";
  import dayjs from "dayjs";

  import { onMount } from "svelte";
  import { slide } from "svelte/transition";

  import { inputValid } from "$lib/utils/validations";

  export let inputType: "input" | "textarea" = "input";
  export let value: string | number | null = "";
  export let handleValidation:
    | ((value: string | number) => { valid: boolean; message: string })
    | undefined = undefined;
  export let inputClass: string =
    "!w-full !outline-none focus-visible:!outline-none";
  export let errorMessage = "";
  export let id: string = "";
  export let label: string = "";
  export let labelClass: string = "";
  export let size: "sm" | "md" = "md";
  export let onInput: ((e: any) => void) | undefined = undefined;
  export let showError = false;

  let isFocused = false;
  let input: HTMLInputElement;

  function handleFocus() {
    isFocused = true;
  }

  function handleBlur() {
    isFocused = false;
  }

  onMount(() => {
    if ($$restProps.type === "datetime-local") {
      value = dayjs(value).format("YYYY-MM-DD HH:mm");
    }
  });

  $: if (value) {
    if (handleValidation) {
      const check = handleValidation(value);
      errorMessage = check.message;
      showError = !check.valid;
    } else {
      showError = true;
      const check = inputValid(value, id);
      errorMessage = check.message;
      showError = !check.valid;
    }
  } else {
    showError = false;
  }
</script>

<div class="w-full">
  <div class="relative grid">
    {#if label}
      <label
        for=""
        class={clsx(
          "font-mulish mb-2 text-sm capitalize",
          { "!mb-1 !text-12": size === "sm" },
          labelClass
        )}>{label}</label
      >
    {/if}
    <div
      class={clsx(
        "flex gap-2 overflow-hidden rounded-md border border-gray-100 transition-all duration-300",
        {
          "px-2 py-1 text-12": size === "sm",
          "px-6 py-3 text-13": size === "md",
        }
      )}
      class:!border-orange-500={isFocused}
      class:!border-red-500={showError}
      class:border-green-500={!showError && value}
    >
      {#if inputType == "input"}
        <input
          {...$$restProps}
          on:focus={handleFocus}
          on:blur={handleBlur}
          class={clsx(inputClass, {
            "!w-full !border-red-100 !outline-none focus:outline-none":
              showError,
          })}
          bind:value
          on:input={onInput}
          bind:this={input}
        />
      {:else}
        <textarea
          {...$$restProps}
          on:focus={handleFocus}
          on:blur={handleBlur}
          class={clsx(inputClass, {
            "!w-full !border-red-100 !outline-none": showError,
          })}
          bind:value
        />
      {/if}
    </div>
    <div class="relative">
      {#if showError}
        <p transition:slide class=" text-13 text-red-500">
          {errorMessage}
        </p>
      {/if}
    </div>
  </div>
</div>
