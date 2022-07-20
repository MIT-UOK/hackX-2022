import Button from "../../Button"

function Form() {
    return (
        <form>
            <div className="mb-6">
                <input
                    type="text"
                    placeholder="Your Name"
                    className="
                  w-full
                  rounded
                  py-3
                  px-[14px]
                  text-body-color text-base
                  border border-[f0f0f0]
                  outline-none
                  focus-visible:shadow-none
                  focus:border-primary
                  "
                />
            </div>
            <div className="mb-6">
                <input
                    type="email"
                    placeholder="Your Email"
                    className="
                  w-full
                  rounded
                  py-3
                  px-[14px]
                  text-body-color text-base
                  border border-[f0f0f0]
                  outline-none
                  focus-visible:shadow-none
                  focus:border-primary
                  "
                />
            </div>
            <div className="mb-6">
                <input
                    type="text"
                    placeholder="Your Phone"
                    className="
                  w-full
                  rounded
                  py-3
                  px-[14px]
                  text-body-color text-base
                  border border-[f0f0f0]
                  outline-none
                  focus-visible:shadow-none
                  focus:border-primary
                  "
                />
            </div>
            <div className="mb-6">
                <textarea
                    rows={6}
                    placeholder="Your Message"
                    className="
                  w-full
                  rounded
                  py-3
                  px-[14px]
                  text-body-color text-base
                  border border-[f0f0f0]
                  resize-none
                  outline-none
                  focus-visible:shadow-none
                  focus:border-primary
                  "
                    defaultValue={""}
                />
            </div>
            <div className="text-center">
                <Button title={"SEND MESSAGE"} />
            </div>
        </form>
    );
}

export default Form;