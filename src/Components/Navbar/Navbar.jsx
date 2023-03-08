import styles from "./Navbar.module.css";

import CartWidget from "../CartWidget/CartWidget";

import { Link } from "react-router-dom";

const Navbar = ({ children }) => {
  let numero = 12;
  return (
    <div>
      <div className={styles.containerNavbar}>
        <Link to="/" style={{ color: "#e1d4c7", textDecoration: "none" }}>
          <img
            src="https://res.cloudinary.com/duvftojdz/image/upload/v1678287045/Sin_t%C3%ADtulo_jmk3au.png"
            width="100%"
            height="100"
            align="right"
            alt=""
          />
        </Link>

        <ul className={styles.containerList}>
          <Link to="/" className={styles.navbarItem}>
            Tortas y 
          </Link>
          <Link to="/category/urbanas" className={styles.navbarItem}>
            Urbanas
          </Link>
          <Link to="/category/deportivas" className={styles.navbarItem}>
            Deportivas
          </Link>
        </ul>
        <CartWidget numero={numero} />
      </div>
      {children}
    </div>
  );
};

export default Navbar;
