import { signIn, useSession } from 'next-auth/react'
// import React, { useEffect } from 'react'
import SpotifyWebApi from 'spotify-web-api-node';
import { useEffect } from 'react'
// import spotifyApi from '../lib/spotify';

const spotifyApi = new SpotifyWebApi({
    clientId: process.env.NEXT_PUBLIC_CLIENT_ID,
    clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
    // redirectUri: process.env.REDIRECT_URI,
})

function useSpotify() {
    const {data: session} = useSession();

    useEffect(() => {
        if(session){
            if(session.error === "RefreshAccessTokenError"){
                signIn();
            }
            spotifyApi.setAccessToken(session.setAccessToken);
        }
    }, [session])

    return spotifyApi;
}

export default useSpotify
