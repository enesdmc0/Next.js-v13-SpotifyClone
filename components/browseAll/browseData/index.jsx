import Image from 'next/image';

const BrowseData = ({text, color, image}) => {

    return (
        <div style={{backgroundColor: `#${color}` }} className={`rounded-lg cursor-pointer overflow-clip relative w-56 h-56 pt-6 pl-5`}>
            <div className='font-bold text-xl text-white'>{text}</div>
                <Image width={96} height={96} className='object-cover absolute -right-3 -bottom-2 origin-center rotate-25' alt={text} src={image}/>
        </div>
    );
};

export default BrowseData;
