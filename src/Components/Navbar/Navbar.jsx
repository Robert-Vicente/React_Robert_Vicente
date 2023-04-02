import styles from "./Navbar.module.css";

import CartWidget from "../CartWidget/CartWidget";

import { Link } from "react-router-dom";


const Navbar = ({ children }) => {
  
  const cate = [
    {
      title: "TODAS",
      path: "/",
      id: 1,
    },
    {
      title: "COPETIN",
      path: "/category/copetin",
      id: 2,
    },
    {
      title: "SANDWICH",
      path: "/category/sandwich",
      id: 3,
    },
  ];

  return (
    <div>
      <div className={styles.containerNavbar}>
        <Link to="/" style={{ color: "#e1d4c7", textDecoration: "none" }}>
          <img src="https://res.cloudinary.com/duvftojdz/image/upload/v1680385761/tu_sandwich_isgknb.png" alt="" />
        </Link>

        <ul className={styles.containerList}>
          {cate?.map((category) => {
            return (
              <Link
                key={category.id}
                to={category.path}
                className={styles.navbarItem}
              >
                {category.title}
              </Link>
            );
          })}
        </ul>
        <CartWidget />
      </div>
      {children}
    </div>
  );
};

export default Navbar;
