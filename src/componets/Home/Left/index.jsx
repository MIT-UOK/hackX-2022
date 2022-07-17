import Button from "../../Button";
import useWindowDimensions from "../../../hook/getWindowDimensions";
import { Wave } from 'react-animated-text';

function HomeLeft() {
    const { height, width } = useWindowDimensions();
    return (
        <div style={{ maxHight: `${height / 2}` }} className="sm:pb-2 md:pb-0 text-center">
            <h1
                class="text-3xl lg:text-5xl 2xl:text-7xl  tracking-wide mb-3 md:mb-10 font-semibold text-primary">
                REGISTRATIONS
            </h1>


            <h1
                class="text-5xl lg:text-6xl 2xl:text-8xl tracking-wide leading-snug mb-3 md:mb-10 font-extrabold text-primary">
                <Wave
                    text="NOW OPEN!"
                    effect="verticalFadeOut"
                    paused={true}
                    delay={2}
                    effectDirection='down'
                />
            </h1>
            <div >
                <Button title={" REGISTER NOW"} />
            </div>
        </div>

    );
}

export default HomeLeft;