import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import events from '$lib/events';

export const load: PageLoad = ({ params }) => {
	const event = events.find((event) => event.id.toString() == params.id);
	if (event) {
		return event;
	}

	error(404, 'Not found');
};
