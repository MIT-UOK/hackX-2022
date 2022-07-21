import mascottyWithTab from "../../../assets/mascotty-tab-pro-fixed.webp"

function Top() {
    return (
        <div className="box-border flex flex-col items-center content-center mx-auto leading-6 text-black border-0 border-gray-300 border-solid md:flex-row ">
            <div className="box-border relative w-full max-w-md  mt-5 mb-4 -ml-5 text-center bg-no-repeat bg-contain border-solid md:ml-0 md:mt-0 md:max-w-none lg:mb-0 md:w-1/2 xl:pl-10">
                <img src={mascottyWithTab} />
            </div>
            <div className="box-border order-first w-full text-white border-solid md:w-1/2 md:pl-10 md:order-none">
                <h2 className="m-0 text-xl font-semibold leading-tight border-0 border-gray-300 lg:text-3xl md:text-2xl">
                    What is HackX?
                </h2>
                <p className="pt-4 pb-8 m-0 leading-7 text-gray-light  lg:text-lg">
                    hackX is an Inter-University Startup Challenge, organized by the Industrial Management Science Students' Association (IMSSA) of the Department of Industrial Management, University of Kelaniya.

                </p>
                <p className="pt-4 pb-8 m-0 leading-7 text-gray-light lg:text-lg">
                    HackX enables young innovators to pitch and explore their ideas, preparing them to be the leaders of tomorrow.Undergraduates will get an opportunity to create essential networks with industry executives and other industry stalwarts while enhancing their knowledge and skills, which will be very useful in their future pursuits as entrepreneurs.
                </p>
                <p className="pt-4 pb-8 m-0 leading-7 text-gray-light lg:text-lg">
                    hackX unfolds its 7th chapter as hackX 2022, and looks forward to witnessing the innovative and creative ideas of Sri Lankan undergraduates for sustainable tech-based solutions.                </p>
            </div>
        </div>
    );
}

export default Top;