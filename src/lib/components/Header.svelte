<script lang="ts">
	import type { UserType } from '@kinde-oss/kinde-auth-sveltekit';

	export let user: UserType | null;
	export let isAuthenticated: boolean;
</script>

<header>
	<nav class="container mx-auto flex justify-between items-center py-4">
		<h1 class="text-display-3">Auth kinde</h1>
		{#if isAuthenticated}
			<div class="flex justify-between items-center gap-8">
				<div class="avatar">
					{user?.given_name || user?.email}
				</div>
				<div class="flex gap-4 items-center">
					<a class="px-4 py-2 bg-gray-900 text-white" href="/api/auth/logout"> Sign out </a>
				</div>
			</div>
		{:else}
			<div>
				<a class="px-4 py-2" href="/api/auth/login"> Sign in </a>
				<a class="px-4 py-2 bg-gray-900 text-white" href="/api/auth/register"> Sign up </a>
			</div>
		{/if}
	</nav>
</header>
