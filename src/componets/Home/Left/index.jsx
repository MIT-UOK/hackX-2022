// import Button from "../../Button";
import useWindowDimensions from "../../../hook/getWindowDimensions";
// import Typewriter from 'typewriter-effect';
import IconText from "../../IconText";

function HomeLeft() {
    const { height } = useWindowDimensions();
    return (
        <div style={{ maxHight: `${height / 2}` }} className="sm:pb-2 md:pb-0 text-center">
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

            {/* <div>
                <h1 className="text-2xl text-primary capitalize">30 teams are ready to pitch their brilliant ideas at </h1>
            </div> */}
            <div className="text-left bg-gray-dark p-4 rounded-xl mx-2 md:mx-0">
                <h2 className="text-center text-xl text-white">The semi-finals of hackX 2022</h2>
                <IconText type={"time"} details="25th of September, 2022" />
                <IconText type={"date-time"} details="09:00am onwards" />
                <IconText type={"location"} details="Multimedia Room, Department of Industrial Management, University of Kelaniya" />
            </div>
        </div>

    );
}

export default HomeLeft;