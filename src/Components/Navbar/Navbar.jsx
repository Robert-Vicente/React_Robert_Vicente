import CartWidget from "../CartWidget/CartWidget";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.containerNavbar}>
      <img
        src="https://res.cloudinary.com/duvftojdz/image/upload/v1677457479/gbli4ycma0wyexru0ubu.png"
        alt=""
        style={{ width: "10%", objectFit: "cover" }}
      />
      <ul className={styles.containerlist}>
        <li>Hace tu Pedido</li>
        <li>Nuestros Productos</li>
        <li>Encontra tu Local</li>
      </ul>
      <CartWidget />
    </div>
  );
};

export default Navbar;
