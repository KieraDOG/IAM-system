import NewIAM from "./components/NewIAM";

const Header = ({ onNewIAMClick }) => (
  <div className="border-b border-gray-300 py-4">
    <NewIAM onClick={onNewIAMClick} />
  </div>
);

export default Header;
