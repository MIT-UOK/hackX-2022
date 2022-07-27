import mascot from "../../../assets/mascot.png"
import useWindowDimensions from "../../../hook/getWindowDimensions";

function HomeRight() {
    const { height, width } = useWindowDimensions();
    let imgHeight = height - 100;

    const styles = {
        maxHeight: width >= 768 ? `${imgHeight}px` : `${height / 2 - 40}px`,
        width: "auto"
    }

    return (
        <div className="z-50">
            <img
                src={mascot}
                alt="hero"
                style={styles}
            />
        </div>

    );
}

export default HomeRight;