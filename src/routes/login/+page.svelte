<script>
	import { enhance } from '$app/forms';
	import { goto } from '$app/navigation';
</script>

<div class="flex h-full justify-center">
	<div class="auto-auto-rows-auto my-auto grid h-fit w-full max-w-md gap-y-10 px-8">
		<img src="/logo.svg" class="px-10" alt="" />
		<form
			action="?/login"
			method="post"
			use:enhance={() =>
				async ({ result }) => {
					// do something with result or after submission
					if (result.type === 'success' && result.status === 200) {
						goto('/'); // send back to main page of site
					} else if (result.type === 'redirect') {
						// form response might return a redirect
						goto(result.location, { invalidateAll: true });
					} else {
						// show an error
						const errorText = result.type === 'error' ? result.error.message : result.data?.message;
					}
				}}
		>
			<div
				class="flex min-h-32 w-full flex-col gap-2 rounded-2xl bg-stone-900 p-4 text-center text-white"
			>
				<p class="text-stone-400">🚨❗ Calma lá, meu nobre ✋👮‍♂️</p>
				<h1 class="text-lg tracking-wide md:text-xl">⚠️ Acesso Restrito Sinforoso ⚠️</h1>
				<input
					type="text"
					name="email"
					placeholder="Email"
					class="h-9 rounded-md border border-stone-400 p-2 text-black"
				/>
				<input
					type="password"
					name="password"
					placeholder="Senha"
					class="h-9 rounded-md border border-stone-400 p-2 text-black"
				/>
				<button
					type="submit"
					class="h-12 rounded-md bg-stone-600 text-xl font-bold text-white hover:brightness-90"
					>Entra</button
				>
			</div>
		</form>
	</div>
</div>
