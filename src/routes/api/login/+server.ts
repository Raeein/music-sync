/** @type {import('./$types').RequestHandler} */

import { error, redirect } from '@sveltejs/kit';
import { json, error } from '@sveltejs/kit';
import { getAuthURL } from '$lib/server/spotify-api'

// import {VITE_SPOTIFY_CLIENT_ID, VITE_SPOTIFY_CLIENT_SECRET} from '$env/static/private';

export function GET() {
    const url = getAuthURL()

    console.log(url);

    if (url === '') {
        return error(400, 'Could not load env variables');
    }

    return json ({
        status: 200,
        redirectURL: url
    })
}
