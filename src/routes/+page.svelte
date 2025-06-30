<script lang="ts">
	import { onMount } from 'svelte';

	const normalize = (number: number) => {
		return Math.floor(number).toString().padStart(2, '0');
	};

	const nextEvent = {
		title: 'Rolê de Quinta',
		description: 'Tangie',
		startTime: new Date(2025, 6, 3, 19)
	};
	const oneWeekAgo = new Date(nextEvent.startTime);
	oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);

	let diff = $state(0);

	let remaining = $derived({
		days: normalize(diff / (1000 * 60 * 60 * 24)),
		hours: normalize((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
		minutes: normalize((diff % (1000 * 60 * 60)) / (1000 * 60)),
		seconds: normalize((diff % (1000 * 60)) / 1000)
	});

	let progress = $derived((100 * diff) / (nextEvent.startTime - oneWeekAgo));

	onMount(() => {
		let frame = requestAnimationFrame(function update() {
			// const now = new Date(2025, 6, 4, 6);
			const now = new Date();
			frame = requestAnimationFrame(update);
			diff = nextEvent.startTime - now;
		});

		return () => {
			cancelAnimationFrame(frame);
		};
	});

	const isAllowed = $derived(progress < 0 && progress > -7);
</script>

{#snippet numberCard(number, label)}
	<div
		class="bg-zync-700/10 flex flex-col items-center rounded-lg border border-zinc-900/50 p-4 backdrop-blur-md"
	>
		<span class="text-4xl font-bold text-white">{number}</span>
		<span class="mt-1 text-lg text-white/80">{label}</span>
	</div>
{/snippet}

<div class="flex h-full justify-center">
	<div class="auto-auto-rows-auto my-auto grid h-fit w-full max-w-md gap-y-6 px-8">
		<img src="/logo.svg" class="p-10" alt="" />
		<div>
			<div class="bg-zync-700/10 -mb-10 overflow-hidden rounded-2xl backdrop-blur-md">
				<h1 class="bg-gray-200 px-4 py-2 text-xl font-bold tracking-wider">
					{#if progress > 50}
						Próximo evento
					{:else if !isAllowed}
						Evento em breve
					{:else}
						Evento rolando
					{/if}
				</h1>
				<ul class="p-4 text-lg text-white">
					<li>🎯 {nextEvent.title}</li>
					<li>📝 {nextEvent.description}</li>
					<li>
						🗓️ {new Intl.DateTimeFormat('pt-BR', {
							year: 'numeric',
							month: 'short',
							day: 'numeric',
							timeZone: 'UTC'
						}).format(nextEvent.startTime)}
					</li>
				</ul>
			</div>
			<button
				class="aspect-square w-full max-w-lg rounded-full text-center font-medium text-stone-400 shadow-xl/30 inset-shadow-indigo-500 transition-colors {isAllowed
					? 'shadow-black-700/30 bg-stone-600 hover:bg-stone-800 focus:ring-4 focus:ring-zinc-300 focus:outline-none'
					: 'shadow-black-700/50 bg-stone-700'}"
			>
				{#if isAllowed}
					<span class="text-xl">Bater Ponto</span>
				{:else}
					<p class="font-bold">Liberado pra bater em</p>
					<div class="mt-4 grid grid-cols-4 flex-wrap gap-2 md:gap-4">
						{@render numberCard(remaining.days, 'D')}
						{@render numberCard(remaining.hours, 'H')}
						{@render numberCard(remaining.minutes, 'M')}
						{@render numberCard(remaining.seconds, 'S')}
					</div>
				{/if}
				<!-- {normalize(progress)} -->
			</button>
		</div>
	</div>
</div>
