import { AiFillFacebook, AiFillLinkedin } from "react-icons/ai"
import { MdEmail } from "react-icons/md"

function Card({ name, position, linUrl, fbUrl, email, img }) {
    return (
        <div className="w-full h-full">
            <div className="flex flex-col">
                <img className="rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
                    src={img} />

                <div className="text-center mt-6">
                    <h1 className="text-gray-light text-xl font-bold mb-1">
                        {name}
                    </h1>
                    <div className="text-gray-dark font-light mb-2">
                        {position}
                    </div>
                    <div className="flex items-center justify-center">
                        <a href={fbUrl} className="flex rounded-full opacity-50 hover:opacity-100
                                transition-opacity duration-300 h-10 w-10">
                            <AiFillFacebook className="mx-auto mt-2" />
                        </a>
                        <a href={linUrl} className="flex rounded-full opacity-50 hover:opacity-100
                                transition-opacity duration-300 h-10 w-10">
                            <AiFillLinkedin className="mx-auto mt-2" />
                        </a>

                        <a href={email} className="flex rounded-full opacity-50 hover:opacity-100
                                transition-opacity duration-300 h-10 w-10">
                            <MdEmail className="mx-auto mt-2" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;