import { scopes } from './scopes.ts'

export function getAuthURL(): string {

    const client_id = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
    const client_secret = import.meta.env.VITE_SPOTIFY_CLIENT_SECRET;

    if (client_secret === undefined || client_id === undefined) {
        return '';
    }
    console.log('Client ID is', client_id);
    console.log('Client ID is', client_secret);

    const spotifyAuthorizeEndpoint = 'https://accounts.spotify.com/authorize';
    const redirectURL = 'http://localhost:3000';
    const scope = scopes.join(' ');

    const authUrl = new URL(spotifyAuthorizeEndpoint);
    authUrl.searchParams.append('client_id', client_id);
    authUrl.searchParams.append('response_type', 'code');
    authUrl.searchParams.append('redirect_uri', redirectURL);
    authUrl.searchParams.append('scope', scope);

    return authUrl.toString()
}
