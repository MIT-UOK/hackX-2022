function Button({ title }) {
    return (
        <button
            class="bg-secondary px-10 py-5 font-bold text-white rounded rounded-tr-3xl rounded-bl-3xl">
            {title}
        </button>
    );
}

export default Button;