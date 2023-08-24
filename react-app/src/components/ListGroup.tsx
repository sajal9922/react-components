// // import { Fragment } from "react";
// import { MouseEvent } from 'react';
// function ListGroup() {
//   let items = ['Kokkola', 'Turku', 'Helsinki', 'Vaasa', 'Oulu'];
//   // items = [];
//   //event handler
//   // Type anotation
//   const handleClick = (event: MouseEvent) => console.log(event);
//   return (
//     // if we add empty angle brackets'<>' react will import fragment automaticly.
//     <>
//       <h1>List Items</h1>
//       {/* Conditional rendering
//       {items.length === 0 ? <p>No item found</p> : null}
//       {items.length === 0 && <p>Another way to render conditionally.</p>} */}

//       <ul className="list-group">
//         {/* In jsx we can use only html element or react element. To render data
//         dinamicly wrap the expressiion with curly breces'{}'. Also display data
//         dinamicly also wrap data with curly breces'{}' */}

//         {items.map((item, index) => (
//           <li
//             key={item}
//             className="list-group-item active"
//             onClick={handleClick}
//           >
//             {item}
//           </li>
//         ))}
//       </ul>
//     </>
//   );
// }

import { useState } from 'react';
// Passing data via props
interface Props {
  items: string[];
  heading: string;
  onSelectItem: (itme: string) => void;
}
function ListGroup({ items, heading, onSelectItem }: Props) {
  // Hook
  // State hook tells react this component state will change over time
  const [selectedIndex, setSelectedIndex] = useState(-1);
  // returns an array
  // array[0] = variable (salectedIdex)
  //array[1] = updater function to update selectedIndex

  return (
    // if we add empty angle brackets'<>' react will import fragment automaticly.
    <>
      <h1>{heading}</h1>
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            key={item}
            className={
              selectedIndex === index
                ? 'list-group-item active'
                : 'list-group-item'
            }
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
