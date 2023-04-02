import Item from "../Item/Item.jsx";

const Items = ({ onDelete, currentItems, onAdd, itemCount }) => {
  return (
    <div className="flex flex-col pb-12 pt-10 w-full">
      {currentItems.map((item) => (
        <Item
          id={item.id}
          key={item.id}
          price={item.price}
          amount={item.amount}
          img={item.img}
          title={item.title}
          onDelete={() => onDelete(item.id)}
          onAdd={() => onAdd(item.id)}
          itemCount={itemCount}
        />
      ))}
    </div>
  );
};

export default Items;
