import type { PageServerLoad } from './$types';

const events = [
	{
		id: 1,
		title: 'Thursday Tech Meetup',
		description: 'Weekly technical discussion',
		start_time: '2024-06-17T19:00:00',
		end_time: '2024-06-17T21:00:00',
		discord_channel_id: '123456789012345678',
		is_active: true,
		created_at: '2024-06-20T10:00:00',
		updated_at: null,
		attendees: []
	},
	{
		id: 2,
		title: 'Friday Game Night',
		description: 'Casual community gaming session',
		start_time: '2024-06-24T20:00:00',
		end_time: '2024-06-24T23:30:00',
		discord_channel_id: '987654321098765432',
		is_active: true,
		created_at: '2024-06-19T12:00:00',
		updated_at: '2024-06-21T18:00:00',
		attendees: ['u1001', 'u1002', 'u1003']
	},
	{
		id: 3,
		title: 'AI Learning Session',
		description: 'Intro to prompt engineering and LLMs',
		start_time: '2024-06-31T17:00:00',
		end_time: '2024-06-31T19:00:00',
		discord_channel_id: '246813579135792468',
		is_active: false,
		created_at: '2024-06-15T08:30:00',
		updated_at: '2024-06-22T19:10:00',
		attendees: ['u1002', 'u1004']
	},
	{
		id: 4,
		title: 'Monday Morning Standup',
		description: 'Quick sync for ongoing projects',
		start_time: '2024-07-07T09:00:00',
		end_time: '2024-07-07T09:30:00',
		discord_channel_id: '135791357913579135',
		is_active: true,
		created_at: '2024-06-23T14:15:00',
		updated_at: null,
		attendees: ['u1001']
	},
	{
		id: 5,
		title: 'Thursday Tech Meetup',
		description: 'Weekly technical discussion',
		start_time: '2024-07-14T19:00:00',
		end_time: '2024-07-14T21:00:00',
		discord_channel_id: '123456789012345678',
		is_active: true,
		created_at: '2024-06-20T10:00:00',
		updated_at: null,
		attendees: []
	},
	{
		id: 6,
		title: 'Friday Game Night',
		description: 'Casual community gaming session',
		start_time: '2024-07-21T20:00:00',
		end_time: '2024-07-21T23:30:00',
		discord_channel_id: '987654321098765432',
		is_active: true,
		created_at: '2024-06-19T12:00:00',
		updated_at: '2024-06-21T18:00:00',
		attendees: ['u1001', 'u1002', 'u1003']
	},
	{
		id: 7,
		title: 'Thursday Tech Meetup',
		description: 'Weekly technical discussion',
		start_time: '2024-06-20T19:00:00',
		end_time: '2024-06-20T21:00:00',
		discord_channel_id: '123456789012345678',
		is_active: true,
		created_at: '2024-06-20T10:00:00',
		updated_at: null,
		attendees: []
	},
	{
		id: 8,
		title: 'Friday Game Night',
		description: 'Casual community gaming session',
		start_time: '2024-06-21T20:00:00',
		end_time: '2024-06-21T23:30:00',
		discord_channel_id: '987654321098765432',
		is_active: true,
		created_at: '2024-06-19T12:00:00',
		updated_at: '2024-06-21T18:00:00',
		attendees: ['u1001', 'u1002', 'u1003']
	}
];

export const load: PageServerLoad = () => {
	return { events: [...events].sort((a, b) => new Date(b.start_time) - new Date(a.start_time)) };
};
