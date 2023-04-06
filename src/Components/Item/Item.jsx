import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Item = ({ price, amount, title, img, onDelete, onAdd, onDecreased }) => {
  return (
    <div className="flex my-6">
      <div className="w-24">
        <img src={img} alt="img" />
      </div>

      <div className="flex flex-col w-full justify-center items-start">
        <h2 className="bold text-gray-700 font-semibold tracking-widest">
          {title}
        </h2>
        <p className="text-gray-500 font-medium">${price}</p>
        <button
          onClick={onDelete}
          className="text-violet-500 tracking-widest text-sm ease-in-out duration-300 hover:text-violet-700 transition-all"
        >
          remove
        </button>
      </div>

      <div className="flex flex-col justify-center items-center">
        <FontAwesomeIcon
          icon={faAngleUp}
          onClick={onAdd}
          className="hover:cursor-pointer text-violet-500 hover:text-violet-700 text-xl  ease-in-out duration-300 transition-all"
        />
        <p>{amount}</p>
        <FontAwesomeIcon
          icon={faAngleDown}
          onClick={onDecreased}
          className="hover:cursor-pointer text-violet-500 hover:text-violet-700 text-xl  ease-in-out duration-300 transition-all"
        />
      </div>
    </div>
  );
};

export default Item;
