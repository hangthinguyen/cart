import Body from "./Components/Body/Body";
import NavBar from "./Components/NavBar/NavBar";
import { items } from "./data";
import { useState, useCallback, useEffect } from "react";

function App() {
  const [currentItems, setItems] = useState(items);

  const [count, setCount] = useState(0);

  const [eachItemCount, setCountEachITem] = useState(1);

  const handleCartItemsNumber = useCallback(() => {
    setCount(currentItems.length);
  }, [currentItems.length]);

  const handleRemoveItem = useCallback(
    (todoId) => {
      const itemsClone = structuredClone(currentItems);

      currentItems.forEach((item) => {
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
          setCountEachITem((item.amount += 1));
        }
      });
      setCount();
    },
    [currentItems]
  );

  useEffect(() => {
    handleCartItemsNumber();
    handleItemsAdded();
  }, [handleCartItemsNumber, handleItemsAdded]);

  console.log(eachItemCount);

  return (
    <div className="flex h-screen flex-col">
      <header className="h-full">
        <NavBar count={count} />

        <Body
          onDelete={handleRemoveItem}
          currentItems={currentItems}
          onAdd={handleItemsAdded}
          itemCount={eachItemCount}
        />
      </header>
    </div>
  );
}

export default App;
