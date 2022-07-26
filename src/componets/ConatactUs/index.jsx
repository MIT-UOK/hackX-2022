import HeadTile from "../HeadTitle";
import imssa from "../../assets/imssa-300x255.png"
import uok from "../../assets/uok.png"
import { BsFacebook, BsInstagram, BsYoutube } from "react-icons/bs"



function ContactUs() {
    return (
        <div id="CONTACT" className="bg-black">
            <div className="container px-3 md:px-0 mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3">
                    <div className="text-center   mb-10">
                        <HeadTile title={"General Links"} textSize="text-4xl" />
                        <p className="text-base text-gray-light p-2">Department of Industrial Management University of Kelaniya</p>
                        <div className="flex justify-center items-center p-2">
                            <img src={uok} alt="uok logo" width={100} height={100} />
                            <img src={imssa} alt="imssa logo" width={120} height={150} />
                        </div>
                    </div>
                    <div className="text-center  mb-10">
                        <HeadTile title={"General Information"} textSize="text-4xl" />
                        <p className="text-base text-gray-light p-2">Industrial Management Science Students’ Association.</p>
                        <p className="text-base text-gray-light p-2">Department of Industrial Management, University of Kelaniya, Dalugama</p>
                    </div>
                    <div className="text-center  mb-10">
                        <HeadTile title={"Contact Info"} textSize="text-4xl" />
                        <div className="flex justify-center items-center p-2">
                            <div className="bg-white p-2 rounded-md m-2">
                                <BsFacebook color="blue" />
                            </div>
                            <div className="bg-white p-2 rounded-md m-2">
                                <BsInstagram color="rose" />
                            </div>
                            <div className="bg-white p-2 rounded-md m-2"><BsYoutube color="red" /></div>
                        </div>
                        <p className="text-base text-gray-light p-2">Phone : +94 11 290 3282</p>
                        <p className="text-base text-gray-light p-2">hackxjr.mit@gmail.com</p>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default ContactUs;