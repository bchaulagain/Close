/* In this optimized code:

- Used React's memo to prevent unnecessary re-renders of both the List and ListItem components.
- Maintained a selectedItems state array to store the selected item names efficiently.
- The toggleItem function handles adding/removing items from the selectedItems array.
- The selected item names are displayed at the top.
- Passed the isSelected prop to each ListItem to determine whether it should be highlighted as selected.
- Used the onClick handler to toggle item selection.
 These changes helps improving performance of the list, especially when dealing with a large number of items. */



import React, { Fragment, useState } from 'react';
import ReactDOM from 'react-dom';

const List = React.memo(({ items, selectedItems, toggleItem }) => (
  <Fragment>
    <ul className="List">
      {items.map((item) => (
        <ListItem
          key={item.name}
          item={item}
          isSelected={selectedItems.includes(item.name)}
          onClick={() => toggleItem(item.name)}
        />
      ))}
    </ul>
  </Fragment>
));

const ListItem = React.memo(({ item, isSelected, onClick }) => (
  <li
    className={`List__item List__item--${item.color} ${isSelected ? 'selected' : ''}`}
    onClick={onClick}
  >
    {item.name}
  </li>
));

const App = () => {
  const [selectedItems, setSelectedItems] = useState([]);

  const toggleItem = (itemName) => {
    setSelectedItems((prevSelectedItems) =>
      prevSelectedItems.includes(itemName)
        ? prevSelectedItems.filter((item) => item !== itemName)
        : [...prevSelectedItems, itemName]
    );
  };

  const selectedNames = selectedItems.map((itemName) =>
    items.find((item) => item.name === itemName)?.name
  );

  return (
    <div>
      <h2>Selected Items:</h2>
      <div>{selectedNames.join(', ')}</div>
      <List items={items} selectedItems={selectedItems} toggleItem={toggleItem} />
    </div>
  );
};

const sizes = ['tiny', 'small', 'medium', 'large', 'huge'];
const colors = ['navy', 'blue', 'aqua', 'teal', 'olive', 'green', 'lime', 'yellow', 'orange', 'red', 'maroon', 'fuchsia', 'purple', 'silver', 'gray', 'black'];
const fruits = ['apple', 'banana', 'watermelon', 'orange', 'peach', 'tangerine', 'pear', 'kiwi', 'mango', 'pineapple'];

const items = sizes.reduce(
  (items, size) => [
    ...items,
    ...fruits.reduce(
      (acc, fruit) => [
        ...acc,
        ...colors.reduce(
          (acc, color) => [
            ...acc,
            {
              name: `${size} ${color} ${fruit}`,
              color,
            },
          ],
          [],
        ),
      ],
      [],
    ),
  ],
  [],
);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
