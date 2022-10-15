function Card({ src, alt, relationship }) {
    return (
        <>
            <div className="bg-white h-48 rounded-2xl p-5 flex flex-col items-center justify-center shadow-lg border border-gray-dark m-5">
                <img
                    src={src}
                    alt={alt}
                />
                <p className="font-bold mt-4 text-black text-center">{relationship}</p>
                {/* <p className="mt-2 text-sm text-white">Connect to 1,000+ apps</p> */}
            </div>
        </>

    );
}

export default Card;