import styles from "@/styles/footer.module.css";
import { Container } from "react-bootstrap";

export default function Footer() {
  return (
    <Container fluid className={styles.footer}>
      <div>footer</div>
    </Container>
  );
}
