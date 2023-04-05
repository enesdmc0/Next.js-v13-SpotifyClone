
import {AiOutlineLeft, AiOutlineRight} from 'react-icons/all'
import HeaderSearch from '../headerSearch';
const HeaderLeft = ({pathname}) => {
  return (
    <div className="flex gap-5 items-center">
                <div className="w-8 h-8 rounded-full bg-headerCircle items-center justify-center flex">
                    <AiOutlineLeft className="text-gray-300" size={20}/>
                </div>
                <div className="w-8 h-8 rounded-full bg-headerCircle items-center justify-center flex">
                    <AiOutlineRight className="text-gray-300" size={20}/>
                </div>
                {pathname.split("/")[1] === "search" && <HeaderSearch/>}
            </div>
  )
}

export default HeaderLeft