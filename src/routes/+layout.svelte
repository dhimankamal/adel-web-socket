<script lang="ts">
	import '../app.css';

	import Header from '$lib/components/Header.svelte';
	import type { LayoutServerData } from './$types';

	export let data: LayoutServerData;
</script>

<Header isAuthenticated={data.isAuthentication} user={data.userProfile} />
<slot />
