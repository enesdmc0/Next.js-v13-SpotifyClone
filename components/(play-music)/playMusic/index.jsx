
import Left from '@/components/(play-music)/Left';
import Right from '../Right';
import Middle from '../Middle';
import store from '@/redux';
import PlayMusicNoUser from '../PlayMusicNoUser';

const PlayMusic = () => {
    const {user} = store.getState().global
    return (
        <div className={` ${user ? "h-90 bg-playMusicBg" : "h-20 bg-gradient-to-r from-[#af2896] to-[#509bf5]"} p-5  w-screen text-white fixed bottom-0 flex items-center justify-between`}>
            {user
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
