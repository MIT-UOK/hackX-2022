// const list = [
//     {
//         id: "1",
//         listItem: "item1"
//     },
//     {
//         id: "2",
//         listItem: "item2"
//     },
//     {
//         id: "3",
//         listItem: "item3"
//     },
//     {
//         id: "4",
//         listItem: "item4"
//     },
// ]

function List({ listItems }) {
    return (
        <ul role="list" className="space-y-4 py-6 text-gray-600">
            {listItems.map((item) => (
                <li key={item.id} className="space-x-2">
                    <span className="text-secondary font-semibold">✓</span>
                    <span>{item.listItem}</span>
                </li>
            ))}

        </ul>
    );
}

export default List;