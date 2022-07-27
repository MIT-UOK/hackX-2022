import Button from "../Button";
import HeadTile from "../HeadTitle";
import List from "../List";
import Card from "./Card";
import data from "./data";

function Guidelines() {
    return (
        <div id="GUIDLINES" className="bg-homeBg1 pt-20">
            <HeadTile title={"GUIDELINES"} />
            <div className="container px-3 md:px-0 mx-auto">
                <div className="pt-10 sm:pt-10 flex justify-center">
                    <Card>
                        <div className=" flex justify-center items-center px-4">
                            <List listItems={data} />
                        </div>
                        <div className="text-center py-5">
                            <Button title={"All Rules and Regulations"} />
                        </div>
                    </Card>
                </div>
            </div>
        </div>


    );
}

export default Guidelines;