<script lang="ts">
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
	const events = data.events;
	const grouped = events.reduce((acc, event) => {
		const date = new Date(event.start_time);

		// Use full month name + year for display
		const monthName = date.toLocaleString('pt-BR', {
			month: 'long',
			year: 'numeric'
		});

		// Find existing group
		let group = acc.find((g) => g.month === monthName);

		if (!group) {
			group = { month: monthName, events: [] };
			acc.push(group);
		}

		group.events.push(event);
		return acc;
	}, []);
</script>

<div class="m-auto flex w-full max-w-2xl flex-col justify-center">
	<div class="sticky top-0 z-10 rounded-b-2xl bg-stone-700 p-6">
		<h1 class="text-4xl tracking-wide text-white">Eventos</h1>
	</div>
	<div class="my-6">
		{#each grouped as month}
			<h2 class="sticky top-24 z-10 w-fit rounded-r bg-zinc-700 px-2 text-white md:rounded">
				{month.month}
			</h2>
			<div class="flex flex-col pr-4">
				{#each month.events as event}
					<div class="grid grid-cols-24">
						<div class="relative col-span-1 -ml-[100%] md:col-span-2 md:ml-0">
							<div class="absolute top-3 h-4 w-full">
								<div class="m-auto h-4 w-4 rounded-full bg-white"></div>
							</div>
							<div class="m-auto h-full w-2 bg-zinc-700"></div>
						</div>
						<div class="col-span-23 my-2 md:col-span-22">
							<p class="mb-2 text-xl text-white">
								{new Date(event.start_time).toLocaleString('pt-BR', {
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
									{event.title}
								</h1>
								<ul class="p-4 text-lg text-white">
									<li>📝 {event.description}</li>
								</ul>
							</div>
						</div>
					</div>
				{/each}
			</div>
		{/each}
	</div>
</div>
