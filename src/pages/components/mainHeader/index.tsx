import { Button, Container, Offcanvas } from "react-bootstrap";
import styles from "@/styles/mainHeader.module.css";
import { useState } from "react";
import { Cart } from "react-bootstrap-icons";
import Link from "next/link";

export default function MainHeader() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className={styles.mainHeader}>
      <div className={styles.buttonGroup}>
        <Link href="/login">
          <Button variant="primary" size="sm" className={styles.eachButton}>
            Login
          </Button>
        </Link>
        <Button
          variant="primary"
          size="sm"
          className={styles.eachButton}
          onClick={handleShow}
        >
          Cart
        </Button>
        <Button variant="primary" size="sm" className={styles.eachButton}>
          Message
        </Button>
      </div>

      <Offcanvas show={show} onHide={handleClose} placement={"end"}>
        <Offcanvas.Header closeButton className={styles.OffcanvasTitle}>
          <Offcanvas.Title>Shopping Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className={styles.emptyCart}>
            <Cart size={70} />
            Your cart is empty!
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}
