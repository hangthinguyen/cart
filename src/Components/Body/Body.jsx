const Body = () => {
  return (
    <section className="h-full flex justify-center items-center">
      <div className="w-3/5 flex flex-col justify-center items-center h-full">
        <h1>YOUR BAG</h1>

        <div>items</div>

        <hr />

        <div className="flex justify-between w-full">
          <p className="font-semibold front-lg">Total</p>
          <p className="bg-violet-500 text-white font-bold front-lg px-3">
            Price
          </p>
        </div>
      </div>
    </section>
  );
};

export default Body;
