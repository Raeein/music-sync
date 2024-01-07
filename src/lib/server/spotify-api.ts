import { scopes } from './scopes.ts'

export function getAuthURL() {

    const client_id = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
    const client_secret = import.meta.env.VITE_SPOTIFY_CLIENT_SECRET;

    console.log('Client ID is', client_id);
    console.log('Client ID is', client_secret);

    const authURL= 'https://accounts.spotify.com/authorize';
    const redirectURL = 'http://localhost:3000';
    const scope = scopes.join(' ');

    const authUrl = new URL(authURL);
    authUrl.searchParams.append('client_id', client_id);
    authUrl.searchParams.append('response_type', 'code');
    authUrl.searchParams.append('redirect_uri', redirectURL);
    authUrl.searchParams.append('scope', scope);

    return authURL.toString()
}
