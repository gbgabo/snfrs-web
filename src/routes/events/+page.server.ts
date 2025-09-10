import type { PageServerLoad } from './$types';
import events from '$lib/events';

export const load: PageServerLoad = () => {
	return { events: events };
};
