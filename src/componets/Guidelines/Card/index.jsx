function Card({ children }) {
    return (
        <div className="rounded-2xl bg-white shadow-xl ">
            {children}
        </div>
    );
}

export default Card;