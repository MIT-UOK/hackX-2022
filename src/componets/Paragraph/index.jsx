function Paragraph({ _className, text, color = "text-gray-light" }) {
    return (
        <p className={`${_className} ${color} leading-7  lg:text-lg`}>{text}</p>
    );
}

export default Paragraph;