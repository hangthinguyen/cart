import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
  return (
    <nav className="bg-indigo-300 flex justify-center items-center py-6 text-white">
      <div className="flex justify-between w-3/5">
        <h2 className="text-3xl font-bold">UseReducer</h2>

        <div className="relative">
          <FontAwesomeIcon icon={faCartPlus} className="text-4xl" />

          <div className="bg-indigo-300 absolute -top-4 -right-3 w-6 h-6 flex justify-center items-center rounded-full">
            1
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
