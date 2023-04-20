import { Button, Container } from "react-bootstrap";
import styles from "@/styles/mainHeader.module.css";

export default function MainHeader() {
  return (
    <div className={styles.mainHeader}>
      <div className={styles.buttonGroup}>
        <Button variant="primary" size="sm" className={styles.eachButton}>
          Login
        </Button>
        <Button variant="primary" size="sm" className={styles.eachButton}>
          Chart
        </Button>
        <Button variant="primary" size="sm" className={styles.eachButton}>
          Message
        </Button>
      </div>
    </div>
  );
}
