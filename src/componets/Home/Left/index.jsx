// import Button from "../../Button";
// import useWindowDimensions from "../../../hook/getWindowDimensions";
// import Typewriter from 'typewriter-effect';
import IconText from "../../IconText";
import ideaXLogo from "../../../assets/ideaX.png"

function HomeLeft() {
    // const { height } = useWindowDimensions();
    return (
        <div  className="sm:pb-2 md:pb-0 text-center">
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
                    <div className="text-5xl my-3 font-bold">30 teams</div>
                     <div className="my-3 text-4xl font-semibold">are ready to pitch their</div>
                      <div className="text-4xl my-3 font-semibold">brilliant ideas at </div>
                      </h1>
                <div className="my-5">
                    <img
                    src={ideaXLogo}
                    alt="ideaXLogo"
                    width={150}
                    height={150}
                    // style={styles}
                                />
                </div>
            </div>
            <div className="text-left bg-gray-dark p-5 rounded-xl mx-2 md:mx-0">
                <h2 className="text-center text-xl text-white">The semi-finals of hackX 2022</h2>
                <IconText type={"time"} details="25th of September, 2022" />
                <IconText type={"date-time"} details="09:00am onwards" />
                <IconText type={"location"} details="Multimedia Room, Department of Industrial Management, University of Kelaniya" />
            </div>
        </div>

    );
}

export default HomeLeft;
