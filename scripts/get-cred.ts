import * as dotenv from 'dotenv';
import { resolve } from 'path';
import fetch from 'node-fetch';

const envPath = resolve('../src/.env');

dotenv.config({ path: envPath });

const CLIENT_ID = process.env.VITE_SPOTIFY_CLIENT_ID;
const CLIENT_SECRET = process.env.VITE_SPOTIFY_CLIENT_SECRET ;

const scopes = [
    'ugc-image-upload',
    'user-read-playback-state',
    'user-modify-playback-state',
    'user-read-currently-playing',
    'streaming',
    'app-remote-control',
    'user-read-email',
    'user-read-private',
    'playlist-read-collaborative',
    'playlist-modify-public',
    'playlist-read-private',
    'playlist-modify-private',
    'user-library-modify',
    'user-library-read',
    'user-top-read',
    'user-read-playback-position',
    'user-read-recently-played',
    'user-follow-read',
    'user-follow-modify'
  ];
  


const AUTH_BASE_URL = 'https://accounts.spotify.com/authorize';
const REDIRECT_URI = 'http://localhost:3000';
const SCOPES = 'user-read-currently-playing user-top-read';

const authUrl = new URL(AUTH_BASE_URL);
authUrl.searchParams.append('client_id', CLIENT_ID);
authUrl.searchParams.append('response_type', 'code');
authUrl.searchParams.append('redirect_uri', REDIRECT_URI);
authUrl.searchParams.append('scope', SCOPES);

console.log(authUrl.toString())
console.log("\n\n")

// Top-level await is currently not supported with the "cjs" output format
async function getAuthorization() {
  try {
    const response = await fetch(authUrl.toString());
    console.log('Response URL:', response.url);
  } catch (error) {
    console.error('Error:', error);
  }
}

getAuthorization();
