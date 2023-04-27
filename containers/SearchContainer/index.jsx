import BrowseAll from '@/components/browseAll/browseAll';


const SearchContainer = ({search}) => {
    return (
        <div>
            <BrowseAll data={search}/>
        </div>
    );
};

export default SearchContainer;
