import HeadTile from "../HeadTitle";
import imssa from "../../assets/imssa-300x255.png"
import uok from "../../assets/uok.png"
import { BsFacebook, BsInstagram, BsYoutube } from "react-icons/bs"



function ContactUs() {
    return (
        <div id="CONTACT" className="bg-black">
            <div className="container px-3 md:px-0 mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4">

                    <div className="text-center md:col-span-2   mb-10">
                        <HeadTile title={"General Information"} textSize="text-4xl" />
                        <p className="text-base text-gray-light p-2">Industrial Management Science Students’ Association.</p>
                        <p className="text-base text-gray-light p-2">Department of Industrial Management, University of Kelaniya, Sri Lanka</p>
                        <div className="flex justify-center items-center p-2">
                            <img src={uok} alt="uok logo" width={100} height={100} />
                            <img src={imssa} alt="imssa logo" width={120} height={150} />
                        </div>
                    </div>

                    <div className="text-center md:col-span-2  mb-10">
                        <HeadTile title={"Contact Info"} textSize="text-4xl" />
                        <div className="flex justify-center items-center p-2">
                            <div className="bg-white p-2 rounded-md m-2 cursor-pointer">
                                <a href="https://www.facebook.com/imhackx/" target="blank">
                                    <BsFacebook color="blue" />
                                </a>
                            </div>
                            <div className="bg-white p-2 rounded-md m-2 cursor-pointer">
                                <a href="https://www.instagram.com/hackx_uok/" target="blank">
                                    <BsInstagram color="rose" />
                                </a>
                            </div>
                            <div className="bg-white p-2 rounded-md m-2 cursor-pointer">
                                <a href="https://www.youtube.com/c/hackXUoK" target="blank">
                                    <BsYoutube color="red" />
                                </a>
                            </div>
                        </div>
                        <p className="text-base text-gray-light p-2">Phone : +94 11 290 3282</p>
                        <p className="text-base text-gray-light p-2">hackx.imssa@gmail.com</p>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default ContactUs;