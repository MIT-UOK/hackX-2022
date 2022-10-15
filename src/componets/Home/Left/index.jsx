// import Button from "../../Button";
// import useWindowDimensions from "../../../hook/getWindowDimensions";
// import Typewriter from 'typewriter-effect';
// import ideaXLogo from "../../../assets/ideaX.png"
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

            <div className="flex flex-col justify-center items-center">
                <h1 className="text-2xl text-white uppercase ">
                    <div className="text-4xl md:text-5xl font-bold">15 teams</div>
                    <div className="my-1 text-3xl md:text-4xl font-semibold">are being supported in preparations for the hackX 2022 Grand Finals.</div>
                    {/* <div className="my-1 text-3xl md:text-4xl font-semibold">hackX 2022 Grand Finals.</div> */}
                </h1>
                <div className="my-5">
                    {/* <img
                        src={ideaXLogo}
                        alt="ideaXLogo"
                        width={150}
                        height={150}
                    /> */}
                </div>
                <EventDetails />
            </div>

        </div>

    );
}

export default HomeLeft;
