import { BsFillCalendarCheckFill } from "react-icons/bs"
import { MdLocationOn } from "react-icons/md"

function IconText({ details, type }) {
    return (
        <div className='flex items-center my-4'>
            {type === "time" && <BsFillCalendarCheckFill />}
            {type === "location" && <MdLocationOn />}
            <h2 className="pl-3 text-gray-light">{details}</h2>
        </div>
    );
}

export default IconText;