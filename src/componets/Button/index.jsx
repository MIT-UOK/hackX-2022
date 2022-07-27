function Button({ title }) {
    return (
        <button
            className="border-2 border-white p-5 text-white text-xl font-bold rounded rounded-tr-3xl rounded-bl-3xl hover:text-black hover:bg-white ">
            {title}
        </button>
    );
}

export default Button;