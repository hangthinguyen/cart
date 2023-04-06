import Body from "./Components/Body/Body";
import NavBar from "./Components/NavBar/NavBar";
import { items } from "./data";
import { useState, useCallback, useEffect } from "react";

function App() {
  const [currentItems, setItems] = useState(items);

  const [count, setCount] = useState(0);

  const [isCleared, setClear] = useState(false);

  const [total, setTotal] = useState("0");

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

  const handleCartItemsNumber = useCallback(() => {
    const itemsClone = structuredClone(currentItems);

    const quanity_result = itemsClone
      .map((item) => item.amount)
      .reduce((currV, preV) => currV + preV, 0);

    const total_result = itemsClone
      .map((item) => (item.total_amount ? item.total_amount : 0))
      .reduce((currV, preV) => currV + preV, 0);

    setTotal(parseFloat(total_result).toFixed(2));

    setCount(quanity_result);
  }, [currentItems]);

  useEffect(() => {
    handleCartItemsNumber();
  }, [handleCartItemsNumber]);

  const handleOnClear = useCallback(() => {
    setClear(true);
    setCount(0);
  }, []);

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
          isCleared={isCleared}
          total={total}
        />
      </header>
    </div>
  );
}

export default App;
