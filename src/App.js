import Body from "./Components/Body/Body";
import NavBar from "./Components/NavBar/NavBar";
import { items } from "./data";
import { useState, useCallback } from "react";

function App() {
  const [currentItems, setItems] = useState(items);

  const handleRemoveItem = useCallback(
    (todoId) => {
      const itemsClone = structuredClone(currentItems);

      itemsClone.forEach((item) => {
        if (item.id === todoId) {
          itemsClone.splice(itemsClone.indexOf(item), 1);
        }
      });
      setItems(itemsClone);
    },
    [currentItems]
  );

  const handleItemsAdded = useCallback(
    (todoId) => {
      const itemsClone = structuredClone(currentItems);

      itemsClone.forEach((item) => {
        if (item.id === todoId) {
          item.amount = item.amount + 1;
          item["total_amount"] = item.price * item.amount;
        }
      });

      setItems(itemsClone);
    },
    [currentItems]
  );

  const handleItemsDecreased = useCallback(
    (todoId) => {
      const itemsClone = structuredClone(currentItems);

      itemsClone.forEach((item) => {
        if (item.id === todoId && item.amount > 0) {
          item.amount = item.amount - 1;
          item.total_amount = item.amount * item.price;
        }
      });

      const result = itemsClone.filter((item) => item.amount > 0);

      setItems(result);
    },
    [currentItems]
  );

  const handleOnClear = useCallback(() => {
    setItems([]);
  }, []);

  let count = currentItems
    .map((item) => item.amount)
    .reduce((currV, preV) => currV + preV, 0);

  let total = currentItems
    .map((item) => {
      if (item.amount === 1) {
        item.total_amount = item.price;
      } else {
        item.total_amount = item.total_amount ? item.total_amount : 0;
      }
      return item.total_amount;
    })
    .reduce((currV, preV) => currV + preV, 0);

  total = parseFloat(total).toFixed(2);

  return (
    <div className="flex h-screen flex-col">
      <header className="h-full">
        <NavBar count={count} />

        <Body
          onDelete={handleRemoveItem}
          currentItems={currentItems}
          onAdd={handleItemsAdded}
          onDecreased={handleItemsDecreased}
          onClear={handleOnClear}
          isCleared={currentItems.length === 0}
          total={total}
        />
      </header>
    </div>
  );
}

export default App;
