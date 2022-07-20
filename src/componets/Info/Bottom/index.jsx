function Bottom() {
    return (
        <div className="box-border flex flex-col items-center content-center mt-2 leading-6 text-black border-0 border-gray-300 border-solid md:mt-20 xl:mt-0 md:flex-row ">
            <div className="box-border w-full text-white border-solid md:w-1/2">
                <h2 className="m-0 text-xl font-semibold leading-tight lg:text-3xl md:text-2xl">
                    Who are we?
                </h2>
                <p className="pt-4 pb-8 m-0 leading-7 text-gray-light lg:text-lg">
                    HackX Jr is organized by the Industrial Management Science Students'
                    Association (IMSSA), which is the student body of the Department of
                    Industrial Management of the University of Kelaniya.
                </p>
                <p className="pt-4 pb-8 m-0 leading-7 text-gray-700 border-0 border-gray-300 lg:text-lg">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio est
                    obcaecati iure ad, placeat quibusdam cum laboriosam quasi, dolore
                    temporibus eaque excepturi nemo aspernatur earum atque totam?
                    Blanditiis, dignissimos ab.
                </p>
            </div>
            <div className="box-border relative w-full max-w-md px-4 mt-10 mb-4 text-center bg-no-repeat bg-contain border-solid md:mt-0 md:max-w-none lg:mb-0 md:w-1/2">
                <img src="https://cdn.devdojo.com/images/december2020/settings.png" />

            </div>
        </div>
    );
}

export default Bottom;