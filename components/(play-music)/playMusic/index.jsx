"use client"
import Left from '@/components/(play-music)/Left';
import Right from '../Right';
import Middle from '../Middle';
import PlayMusicNoUser from '../PlayMusicNoUser';
import {useAuth} from "@/hooks/useAuth";
const PlayMusic = () => {
    const auth = useAuth()
    return (
        <div className={` ${auth ? "h-90 bg-playMusicBg" : "h-20 bg-gradient-to-r from-[#af2896] to-[#509bf5]"} p-5  w-screen text-white fixed bottom-0 flex items-center justify-between`}>
            {auth
                ?    <>
                        <Left/>
                        <Middle/>
                        <Right/>
                    </>
                : <PlayMusicNoUser/>
            }
        </div>
    );
};

export default PlayMusic;
