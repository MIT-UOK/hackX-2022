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

import Paragraph from "../Paragraph"

function List({ listItems }) {
    return (
        <ul className="space-y-4 py-6 text-gray-600">
            {listItems.map((item) => (
                <li key={item.id} className="space-x-2 flex">
                    <div className="text-secondary font-semibold">✓</div>
                    <Paragraph color="text-white" text={item.listItem} />
                </li>
            ))}

        </ul>
    );
}

export default List;