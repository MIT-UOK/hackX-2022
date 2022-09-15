import Button from "../../Button";
import useWindowDimensions from "../../../hook/getWindowDimensions";
import Typewriter from 'typewriter-effect';

function HomeLeft() {
    const { height } = useWindowDimensions();
    return (
        <div style={{ maxHight: `${height / 2}` }} className="sm:pb-2 md:pb-0 text-center">
            <h1
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
            </h1>
            {/* <div >
                <Button
                    title={"Submit Proposal"}
                    href="https://forms.gle/yYMMTmeJJuETU1TGA"
                />
            </div> */}
        </div>

    );
}

export default HomeLeft;