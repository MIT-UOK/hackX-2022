function Card({ children }) {
    return (
        <div className="rounded-2xl bg-gray-dark z-50 shadow-xl max-w-5xl py-10">
            {children}
        </div>
    );
}

export default Card;