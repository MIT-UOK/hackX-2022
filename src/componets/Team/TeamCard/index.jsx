function TeamCard() {
    return (
        <div className="flex flex-col items-center py-4">
            <img
                className="object-cover w-32 h-32 rounded-full ring-4 ring-white"
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                alt=""
            />
            <h1 className="mt-4 text-2xl font-semibold  capitalize text-white">
                arthur melo
            </h1>
            <p className="mt-2 text-gray-light capitalize   ">
                design director
            </p>
        </div>
    );
}

export default TeamCard;