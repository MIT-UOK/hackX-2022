import Bottom from "./Bottom";
import Top from "./Top";

function Info() {
    return (
        <>
            <div className="bg-homeBg1">
                <div className="container px-3 md:px-0 mx-auto">
                    <Top />
                    <Bottom />
                </div>
            </div>
        </>

    );
}

export default Info;