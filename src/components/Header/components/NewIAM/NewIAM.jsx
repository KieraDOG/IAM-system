const NewIAM = ({ onClick }) => (
  <button
    onClick={onClick}
    className="
      block ml-auto
      cursor-pointer
      py-2 px-6
      border border-gray-600 rounded-lg 
      hover:bg-gray-200
      transition duration-300 ease-in-out
    "
  >
    New
  </button>
);

export default NewIAM;
