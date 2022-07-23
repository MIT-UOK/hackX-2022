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
        <div id="CONTACT" className="bg-homeBg1 pt-20">
            <HeadTile title={"CONTACT"} />
            <div className="container px-3 md:px-0 mx-auto">
                <div className="my-10">
                    <Carousel
                        responsive={responsive}
                        infinite={true}
                        autoPlay={true}
                        transitionDuration={50}
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
                    <div className="text-center  space-y-5 mb-10">
                        <h1 className="text-4xl text-white font-semibold">General Links</h1>
                        <p className="text-base text-gray-light">Department of Industrial Management University of Kelaniya</p>
                        <div className="flex justify-center items-center">
                            <img src={uok} alt="uok logo" width={100} height={100} />
                            <img src={imssa} alt="imssa logo" width={120} height={120} />
                        </div>
                    </div>
                    <div className="text-center space-y-5 mb-10">
                        <h1 className="text-4xl text-white font-semibold">General Information</h1>
                        <p className="text-base text-gray-light">Industrial Management Science Students’ Association.</p>
                        <p className="text-base text-gray-light">Department of Industrial Management, University of Kelaniya, Dalugama</p>
                    </div>
                    <div className="text-center space-y-5 mb-10">
                        <h1 className="text-4xl text-white font-semibold">Contact Info</h1>
                        <div className="flex justify-center items-center">
                            <div className="bg-white p-2 rounded-md m-2">
                                <BsFacebook color="blue" />
                            </div>
                            <div className="bg-white p-2 rounded-md m-2">
                                <BsInstagram color="rose" />
                            </div>
                            <div className="bg-white p-2 rounded-md m-2"><BsYoutube color="red" /></div>
                        </div>
                        <p className="text-base text-gray-light">Phone : +94 11 290 3282</p>
                        <p className="text-base text-gray-light">hackxjr.mit@gmail.com</p>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default ContactUs;