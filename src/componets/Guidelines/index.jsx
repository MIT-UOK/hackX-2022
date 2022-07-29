import Button from "../Button";
import HeadTile from "../HeadTitle";
import List from "../List";
import Card from "./Card";
import data from "./data";

function Guidelines() {
    return (
        <div id="GUIDLINES" className="bg-homeBg1 pt-20">
            <HeadTile title={"GUIDELINES"} />
            <div className="container px-1 md:px-0 mx-auto">
                <div className="pt-10 sm:pt-10 flex justify-center">
                    <Card>
                        <div className=" flex justify-center items-center px-6 md:px-14">
                            <List listItems={data} />
                        </div>
                        <div className="text-center py-5">
                            <Button
                                title={"All Rules and Regulations"}
                                href="https://drive.google.com/file/d/1eWTSrf_xQrpI5lCSGOeD5XJ4C3gL6yyy/view?usp=sharing"
                            />
                        </div>
                    </Card>
                </div>
            </div>
        </div>


    );
}

export default Guidelines;