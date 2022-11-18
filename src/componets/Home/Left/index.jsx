// import Button from "../../Button";
// import useWindowDimensions from "../../../hook/getWindowDimensions";
// import Typewriter from 'typewriter-effect';
import grandFinal from "../../../assets/grandFinal.png"
import EventDetails from "../../EventDetails"

function HomeLeft() {
    // const { height } = useWindowDimensions();
    return (
        <div className="sm:pb-2 md:pb-0 text-center">
            {/* <h1
                className="text-2xl lg:text-4xl 2xl:text-6xl  tracking-wide mb-3 md:mb-10 font-semibold text-primary">
                PROPOSAL SUBMISSION
            </h1>


            <h1
                className="text-5xl lg:text-6xl 2xl:text-8xl tracking-wide leading-snug mb-3 md:mb-10 font-normal text-white">
                <Typewriter
                    options={{
                        strings: ['CLOSED'],
                        autoStart: true,
                        loop: true,
                    }}
                />
            </h1> */}
            {/* <div >
                <Button
                    title={"Submit Proposal"}
                    href="https://forms.gle/yYMMTmeJJuETU1TGA"
                />
            </div> */}

            {/* <div className="flex flex-col justify-center items-center"> */}
            {/* <h1 className="text-2xl text-white uppercase "> */}
            {/* <div className="text-4xl md:text-5xl font-bold">THE GRAND FINALS OF HACKX 2022 </div> */}
            {/* <div className="my-1 text-3xl md:text-4xl font-semibold">WILL BE HELD ON THE 20TH OF NOVEMBER, 2022</div> */}
            {/* <div className="my-1 text-3xl md:text-4xl font-semibold">THE GRAND FINALS OF HACKX 2022 WILL BE HELD ON THE 20TH OF NOVEMBER, 2022 AT THE IDEAMART AUDITORIUM</div> */}
            {/* </h1> */}
            {/* <div className="my-5">
                    <img
                        src={grandFinal}
                        alt="ideaXLogo"
                        width={150}
                        height={150}
                    />
                </div> */}
            <EventDetails />
            {/* </div> */}

        </div>

    );
}

export default HomeLeft;
