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
                    HackX Jr is an inter-school hackathon which provides a platform for
                    school students to transform their ideas into reality. It promotes
                    school students to build technology-based solutions to problems they
                    see in the society.
                </p>
                <p className="pt-4 pb-8 m-0 leading-7 text-gray-light lg:text-lg">
                    Participants are enabled the opportunity to develop their soft
                    skills and find inspiration to their creativity as well as
                    problem-solving capabilities through this competition. It paves the
                    path for schoolchildren to be introduced to the IT pathway, create
                    interest and eventually assess the possibilities as well as benefits
                    of IT – based entrepreneurship. It also provides a platform for
                    industries to address the schoolchildren, evaluate their potential
                    and benefit from their unbiased and open-minded solutions.
                </p>
            </div>
        </div>
    );
}

export default Top;