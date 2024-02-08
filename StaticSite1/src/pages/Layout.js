import { NavLink, Outlet } from "react-router-dom";
import styles from "./Layout.module.css";
import Footer from "./Footer";
import RegisterPopUpButton from "./RegisterPopUpButton";
const { nav, navlink, listItem, registerClass } = styles;

function Layout({ name, setName, password, setPassword }) {
  return (
    <>
      <nav
        className={`${nav} d-flex bg-primary text-light justify-content-between `}
      >
        <ul className="d-flex">
          <li className={listItem}>
            <NavLink className={navlink} to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className={navlink} to="aboutus">
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink className={navlink} to="contactus">
              Contact Us
            </NavLink>
          </li>
        </ul>

        {/* <NavLink className={registerClass} to="registerForm">
          Registeration
        </NavLink> */}
        <RegisterPopUpButton
          name={name}
          setName={setName}
          password={password}
          setPassword={setPassword}
        />
      </nav>
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
