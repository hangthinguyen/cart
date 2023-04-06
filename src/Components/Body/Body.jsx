import Items from "../Items/Items";

const Body = ({
  onDelete,
  currentItems,
  onAdd,
  onDecreased,
  onClear,
  isCleared,
  total,
}) => {
  return (
    <section className="h-full flex justify-center items-center">
      <div className="w-3/5 flex flex-col justify-center items-center h-full">
        <div className="h-full flex justify-start flex-col w-full items-center">
          <h1 className="text-4xl font-medium pt-16">YOUR BAG</h1>

          {isCleared ? (
            <h2 className="pt-10 text-2xl tracking-wider font-semibold text-neutral-500">
              is currently empty
            </h2>
          ) : (
            <div className="h-full flex justify-start flex-col w-full items-center">
              <Items
                onDelete={onDelete}
                currentItems={currentItems}
                onAdd={onAdd}
                onDecreased={onDecreased}
                onClear={onClear}
              />

              <hr className="border-transparent bg-gray-300 border-1.5 w-full" />

              <div className="flex justify-between w-full pt-4">
                <p className="font-semibold front-lg">Total</p>
                <p className="bg-violet-400 text-white font-bold front-lg px-3 rounded">
                  ${total}
                </p>
              </div>
              <button
                onClick={onClear}
                className="my-6 bg-violet-200 text-violet-500 py-1 px-4 rounded-md"
              >
                Clear Cart
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Body;
