# Optimized List

## Changes and Optimizations

In this optimized code:

1. **Memoization**: React's `memo` is used to prevent unnecessary re-renders of both the `List` and `ListItem` components. This ensures that only the necessary components are updated when the state changes, improving performance.

2. **State Management**: The code maintains a `selectedItems` state array to efficiently store the selected item names. This state array is updated using the `toggleItem` function.

3. **Toggle Function**: The `toggleItem` function handles adding and removing items from the `selectedItems` array. It optimally updates the state without causing unnecessary re-renders.

4. **Selected Item Display**: The selected item names are displayed at the top of the list, providing a clear view of the currently selected items.

5. **Highlighting**: The `isSelected` prop is passed to each `ListItem` component to determine whether it should be highlighted as selected. This ensures a visually appealing and responsive user interface.

6. **User Interaction**: The `onClick` handler is used to toggle item selection, making it user-friendly and responsive.

These changes collectively help improve the performance of the list, making it suitable for scenarios with a large number of items.

