import HeadTile from "../HeadTitle";
import ConnectCard from "./ConnectCard";
import Form from "./Form";

function ContactUs() {
    return (
        <div id="CONTACT" className="bg-homeBg1 pt-20">
            <HeadTile title={"CONTACT"} />
            <div className="container px-3 md:px-0 mx-auto">
                <div className="mt-12 grid grid-cols-1 gap-10 sm:mt-16 md:grid-cols-2  ">
                    <div className="">
                        <div className="max-w-[570px]">
                            <div className="p-5">

                                <ConnectCard />
                                <ConnectCard />
                                <ConnectCard />
                            </div>

                        </div>
                    </div>
                    <div>
                        <div className="bg-white p-5 rounded-xl">
                            <Form />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default ContactUs;