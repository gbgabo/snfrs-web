<script lang="ts">
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();

	const avatars = [
		{
			name: 'Santiago',
			img: 'https://ui-avatars.com/api/?background=543c52&color=fff&name=Santiago'
		},
		{
			name: 'Vitor Milan',
			img: 'https://ui-avatars.com/api/?background=f55951&color=fff&name=Vitor Milan'
		},
		{
			name: 'Ianckoski',
			img: 'https://ui-avatars.com/api/?background=edd2cb&color=000&name=Ianckoski'
		}
	];
</script>

<div class="m-auto flex w-full max-w-2xl flex-col justify-center">
	<div class="col-span-23 my-2 md:col-span-22">
		<p class="mb-2 text-xl text-white">
			{new Date(data.start_time).toLocaleString('pt-BR', {
				year: 'numeric',
				month: 'short',
				day: 'numeric',
				hour: '2-digit',
				minute: '2-digit',
				timeZone: 'UTC'
			})}
		</p>
		<div class="overflow-hidden rounded-2xl bg-zinc-700/10 backdrop-blur-md">
			<h1 class="bg-gray-200 px-4 py-2 text-xl font-bold tracking-wider">
				{data.title}
			</h1>
			<div class="p-4">
				<ul class="text-lg text-white">
					<li>📝 {data.description}</li>
					<li>Local</li>
				</ul>
				<div class="flex w-fit justify-center px-4">
					{#each avatars as avatar (avatar.name)}
						<img
							class="-ml-3 h-8 w-8 rounded-full shadow-2xl shadow-black"
							src={avatar.img}
							alt={avatar.name}
						/>
					{/each}
				</div>
			</div>
		</div>
	</div>
</div>
