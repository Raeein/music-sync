import { error } from '@sveltejs/kit';
/** @type {import('./$types').RequestHandler} */
export function GET() {

	const random = 10 + Math.random() * 100;
	return new Response(String(random));
}
