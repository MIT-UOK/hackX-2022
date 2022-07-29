function Button({ title, href }) {
    return (
        <a
            href={href}
            target={"_blank"}
            rel="noreferrer"
            className="transition ease-in-out delay-150 bg-primary p-5 hover:-translate-y-1 hover:scale-110  duration-300 text-xl font-bold rounded rounded-tr-3xl rounded-bl-3xl  text-white ">
            {title}
        </a>
    );
}

export default Button;