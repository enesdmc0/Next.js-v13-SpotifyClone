
import Left from '@/components/(play-music)/Left';
import Right from '../(play-music)/Right';
import Middle from '../(play-music)/Middle';


const PlayMusic = () => {
    return (
        <div className="h-90 p-5 bg-playMusicBg w-screen text-white fixed bottom-0 flex items-center justify-between">
            <Left/>
            <Middle/>
            <Right/>
        </div>
    );
};

export default PlayMusic;
