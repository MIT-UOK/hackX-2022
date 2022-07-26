// import mascottyWithTab from "../../../assets/mascotty-tab-pro-fixed.webp"
import HeadTitle from "../../HeadTitle"
import Paragraph from "../../Paragraph";
import Slider from "../../Slider";

function Top() {
    return (
        <div className="box-border flex flex-col items-center content-center mx-auto leading-6 text-black border-0 border-gray-300 border-solid md:flex-row ">
            <div className="rounded-xl overflow-hidden  box-border relative w-full max-w-md  mt-5 mb-4  text-center bg-no-repeat bg-contain border-solid h-96 m-3 md:max-w-none lg:mb-0 md:w-1/2 ">
                {/* <img src={mascottyWithTab} /> */}
                <Slider />
            </div>
            <div className="box-border order-first w-full text-white border-solid md:w-1/2 md:pl-10 md:order-none">
                <HeadTitle alignment="text-left" title={"what is hackx?"} />
                <p className="pt-4 pb-8 m-0 leading-7 text-gray-light  lg:text-lg">
                    hackX is an Inter-University Startup Challenge, organized by the Industrial Management Science Students' Association (IMSSA) of the Department of Industrial Management, University of Kelaniya.

                </p>
                <Paragraph
                    _className="pt-4 pb-8 m-0"
                    text={"HackX enables young innovators to pitch and explore their ideas, preparing them to be the leaders of tomorrow.Undergraduates will get an opportunity to create essential networks with industry executives and other industry stalwarts while enhancing their knowledge and skills, which will be very useful in their future pursuits as entrepreneurs."}
                />
                <p className="pt-4 pb-8 m-0 leading-7 text-gray-light lg:text-lg">
                    hackX unfolds its 7th chapter as hackX 2022, and looks forward to witnessing the innovative and creative ideas of Sri Lankan undergraduates for sustainable tech-based solutions.                </p>
            </div>
        </div>
    );
}

export default Top;