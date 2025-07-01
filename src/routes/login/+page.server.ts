import { fail, type Action, type Actions } from '@sveltejs/kit';

const users = {
	admin: {
		password: 'admin'
	},
	other_admin: {
		password: 'admin'
	}
};

const login: Action = async ({ request, cookies }) => {
	// get the form data
	const data = await request.formData();

	const email = data.get('email');
	const password = data.get('password');

	// Make sure we have the proper fields sent in
	if (typeof email !== 'string' || typeof password !== 'string' || !email || !password) {
		return fail(400, { message: 'Please provide your email and password' });
	}

	console.log(data);

	// if no rows are found, then the email and PW combo was not found
	if (!users[email] || users[email].password !== password) {
		return fail(400, { message: 'Your email or password is incorrect' });
	}

	// set cookie in browser with session GUID

	cookies.set('svelte_app_session', Math.random().toString(), {
		path: '/', // every page
		maxAge: 60 * 60 * 8 // 8 hours
	});

	return {
		success: true
	};
};

export const actions: Actions = { login };
