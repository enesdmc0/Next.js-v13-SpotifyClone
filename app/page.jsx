import HomeContainer from '@/containers/HomeContainer';
import {playlist} from '@/data/home.json';
import {yourShows} from '@/data/home.json';
import Sidebar from '@/components/sidebar/Sidebar';
import Header from '@/components/header/header';
import PlayMusic from '@/components/play-music/playMusic';

const Home = () => {

    return (
        <>
            <Sidebar/>
            <Header/>
            <div className="w-middle absolute right-0 top-16 pb-32">
                <HomeContainer playlist={playlist} yourShows={yourShows}/>
            </div>
            <PlayMusic/>
        </>
    );
};

export default Home;
