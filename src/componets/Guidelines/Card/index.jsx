function Card({ children }) {
    return (
        <div className="rounded-2xl bg-white shadow-xl max-w-5xl py-10">
            {children}
        </div>
    );
}

export default Card;