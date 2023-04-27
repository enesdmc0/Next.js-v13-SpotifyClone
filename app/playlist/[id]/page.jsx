import PlaylistContainer from '@/containers/PlaylistContainer';
import {playlist} from "@/data/home.json";
import {playlistDetail} from "@/data/playlist.json";
import Sidebar from '@/components/sidebar/Sidebar';
import Header from '@/components/header/header';
import PlayMusic from '@/components/play-music/playMusic';
const PlayLists = ({params}) => {
    return (
       <>
           <Sidebar/>
           <Header/>
           <div className="w-middle bg-gradient-to-b from-[#DADAD3] to-[#7F7F7B] h-screen absolute right-0 top-16 pb-32">
               <PlaylistContainer playlist={playlist} id={params.id} playlistDetail={playlistDetail}/>
           </div>
           <PlayMusic/>
       </>
    );
};

export default PlayLists;
