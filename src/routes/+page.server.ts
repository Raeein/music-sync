
export function load({ url, cookies }) {
    const spotifyCode = url.searchParams.get('code');
    const error = url.searchParams.get('error');
    const state = url.searchParams.get('state');

    if (spotifyCode !== '') {

        cookies.set('spotifyCode', spotifyCode, { 
            secure: true, 
            httpOnly: true, 
            path: '/',
            sameSite: 'strict',
            maxAge: 60 * 60 * 24 * 30
        });
    }
    return { spotifyCode, error, state };
} 

