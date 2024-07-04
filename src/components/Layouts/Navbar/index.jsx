import Logo from "../../Elements/Logo";

const Navbar = ({ children }) => {
  return (
    <nav className="nav-bar">
      <Logo />
      {children}
    </nav>
  );
};

export default Navbar;
