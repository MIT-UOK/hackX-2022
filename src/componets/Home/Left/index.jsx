import Button from "../../Button";
import useWindowDimensions from "../../../hook/getWindowDimensions";
import Typewriter from 'typewriter-effect';

function HomeLeft() {
    const { height, width } = useWindowDimensions();
    return (
        <div style={{ maxHight: `${height / 2}` }} className="sm:pb-2 md:pb-0 text-center">
            <h1
                className="text-3xl lg:text-5xl 2xl:text-7xl  tracking-wide mb-3 md:mb-10 font-semibold text-primary">
                REGISTRATIONS
            </h1>


            <h1
                className="text-5xl lg:text-6xl 2xl:text-8xl tracking-wide leading-snug mb-3 md:mb-10 font-normal text-primary">
                <Typewriter
                    options={{
                        strings: ['NOW OPEN'],
                        autoStart: true,
                        loop: true,
                    }}
                />
            </h1>
            <div >
                <Button title={" REGISTER NOW"} />
            </div>
        </div>

    );
}

export default HomeLeft;