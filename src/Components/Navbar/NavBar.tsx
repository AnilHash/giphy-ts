import SearchBox from "./SearchBox";
import "../../styles/components/navbar.scss";

const NavBar = () => {
  return (
    <div className="navbar">
      <h1 className="text">GIPHY</h1>
      <div>
        <SearchBox />
      </div>
    </div>
  );
};

export default NavBar;
