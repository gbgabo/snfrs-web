import type { PageServerLoad } from './$types';

export const load: PageServerLoad = () => {
	return {
		event: {
			title: 'Rolê de Quinta',
			description: 'Tangie',
			startTime: new Date(2025, 6, 3, 19)
		}
	};
};
