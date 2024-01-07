/** @type {import('./$types').RequestHandler} */

import { error, redirect } from '@sveltejs/kit';
import { json, error } from '@sveltejs/kit';
import { getAuthURL } from '$lib/server/spotify-api'

// import {VITE_SPOTIFY_CLIENT_ID, VITE_SPOTIFY_CLIENT_SECRET} from '$env/static/private';

export function GET() {
    const client_id = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
    const client_secret = import.meta.env.VITE_SPOTIFY_CLIENT_SECRET;

    if (client_secret === undefined || client_id === undefined) {
        return error(400, 'Could not load env variables');
    }

    console.log('Client ID is', client_id);
    console.log('Client ID is', client_secret);

    return json ({
        status: 200,
        redirectURL: getAuthURL()
    })
}
