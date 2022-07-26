import HeadTile from "../HeadTitle";
import imssa from "../../assets/imssa-300x255.png"
import uok from "../../assets/uok.png"
import { BsFacebook, BsInstagram, BsYoutube } from "react-icons/bs"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Partners from "./Partners";

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

function ContactUs() {
    return (
        <div id="CONTACT" className="bg-black">
            <div className="container px-3 md:px-0 mx-auto">
                <div >
                    <Carousel
                        responsive={responsive}
                        infinite={true}
                        autoPlay={true}
                        transitionDuration={1000}
                        customTransition="all 1s linear"
                        arrows={false}
                    >
                        <Partners />
                        <Partners />
                        <Partners />
                        <Partners />
                        <Partners />
                        <Partners />
                        <Partners />
                    </Carousel>;
                </div>
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