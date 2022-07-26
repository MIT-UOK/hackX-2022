function Paragraph({ _className, text, }) {
    return (
        <p className={`${_className} leading-7 text-gray-light lg:text-lg`}>{text}</p>
    );
}

export default Paragraph;