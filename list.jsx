import React, { Fragment, useState } from 'react';
import ReactDOM from 'react-dom';
import './styles.css';

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
