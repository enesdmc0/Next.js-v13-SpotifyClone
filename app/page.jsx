
import HomeContainer from "@/containers/HomeContainer";
import {playlist} from "@/data/home.json";
import {yourShows} from "@/data/home.json";
const Home = () => {

    return (
        <div className="w-middle absolute right-0 top-16 pb-32">
            <HomeContainer playlist={playlist} yourShows={yourShows}/>
        </div>
    );
};

export default Home;
