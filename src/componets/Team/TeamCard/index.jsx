import { AiOutlineMail } from "react-icons/ai"
import { BsTelephonePlus } from "react-icons/bs"

function TeamCard({ src, name, position }) {
    return (
        <div className="flex flex-col items-center py-4">
            <img
                className="object-cover w-44 h-44 rounded-full ring-4 ring-white"
                src={src}
                alt={src}
            />
            <h1 className="mt-4 text-xl font-semibold  capitalize text-white">
                {name}
            </h1>
            <p className="mt-2 text-gray-light capitalize   ">
                {position}
            </p>
            <div className="flex gap-4  pt-3 cursor-pointer">
                <AiOutlineMail size={"20px"} color="white" />
                <BsTelephonePlus size={"20px"} color="white" />
            </div>
        </div>
    );
}

export default TeamCard;