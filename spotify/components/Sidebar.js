import React, { useState, useEffect } from 'react'
import { HomeIcon, SearchIcon, LibraryIcon, PlusCircleIcon , HeartIcon, RssIcon, LogoutIcon } from "@heroicons/react/outline"
import { signOut, useSession } from 'next-auth/react'
import useSpotify from '../hooks/useSpotify';

function Sidebar() {
    const spotifyApi = useSpotify();
    const {data: session, status} = useSession();
    console.log(session)
    const {playlist, setPlaylist} = useState([]);

    useEffect(() => {
        if(spotifyApi.getAccessToken()){
            spotifyApi.getUserPlaylists().then((data)=>{
                setPlaylist(data.body.items);
            })
        }
    }, [session, spotifyApi])

    console.log(playlist);
    return (
        <div className="text-gray-500 p-5 text-sm border-r border-gray-900 overflow-y-scroll h-screen scrollbar-hide">
            <div className="space-y-4">
                <button className="flex items-center space-x-2 hover:text-white" onClick={() => signOut()}>
                    <LogoutIcon className="h-5 w-5" />
                    <p>Logout</p>
                </button>
                <button className="flex items-center space-x-2 hover:text-white">
                    <HomeIcon className="h-5 w-5" />
                    <p>Home</p>
                </button>
                <button className="flex items-center space-x-2 hover:text-white">
                    <SearchIcon className="h-5 w-5" />
                    <p>Search</p>
                </button>
                <button className="flex items-center space-x-2 hover:text-white">
                    <LibraryIcon className="h-5 w-5" />
                    <p>Your Library</p>
                </button>
                <hr className="border-t-[0.1px] border-gray-500"></hr>

                <button className="flex items-center space-x-2 hover:text-white">
                    <PlusCircleIcon className="h-5 w-5" />
                    <p>Create Playlist</p>
                </button>
                <button className="flex items-center space-x-2 hover:text-white">
                    <HeartIcon className="h-5 w-5" />
                    <p>Liked Song</p>
                </button>
                <button className="flex items-center space-x-2 hover:text-white">
                    <RssIcon className="h-5 w-5" />
                    <p>Your Episodes</p>
                </button>
                <hr className="border-t-[0.1px] border-gray-500"></hr>

                <p className="cursor-pointer hover:text-white">
                    My Playlist
                </p>
                <p className="cursor-pointer hover:text-white">
                    My Playlist
                </p>
                <p className="cursor-pointer hover:text-white">
                    My Playlist
                </p>
                <p className="cursor-pointer hover:text-white">
                    My Playlist
                </p>
                <p className="cursor-pointer hover:text-white">
                    My Playlist
                </p>
                <p className="cursor-pointer hover:text-white">
                    My Playlist
                </p>
            </div>
        </div>
    )
}

export default Sidebar
