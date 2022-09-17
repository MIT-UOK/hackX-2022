import { BsFillCalendarCheckFill } from "react-icons/bs"
import { MdLocationOn } from "react-icons/md"
import { BsClockFill } from "react-icons/bs"

function IconText({ details, type }) {
    return (
        <div className='flex items-center my-4'>
            {type === "time" && <BsFillCalendarCheckFill size={20} color="white" />}
            {type === "location" && <MdLocationOn size={20} color="white" />}
            {type === "date-time" && <BsClockFill size={20} color="white" />}
            <h2 className="pl-3 text-gray-light">{details}</h2>
        </div>
    );
}

export default IconText;