function HeadTile({ title, alignment = "text-center", textSize = "text-5xl", shadow = false }) {
    return (
        <div className={`${alignment} py-10 `}>
            <h1 className={`${textSize} ${shadow ? "shadow-md shadow-gray-light px-2	" : null} font-semibold inline text-primary`}>{title}</h1>
        </div>
    );
}

export default HeadTile;