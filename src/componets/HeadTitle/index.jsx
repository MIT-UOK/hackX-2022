function HeadTile({ title, alignment = "text-center", textSize = "text-5xl" }) {
    return (
        <div className={`${alignment} py-10`}>
            <h1 className={`${textSize} text-white inline`}>{title}</h1>
        </div>
    );
}

export default HeadTile;