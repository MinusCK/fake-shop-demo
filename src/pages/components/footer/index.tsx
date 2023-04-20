import styles from "@/styles/footer.module.css";
import { Col, Container, Row } from "react-bootstrap";

export default function Footer() {
  return (
    <Container fluid>
      <Row className={styles.footer}>
        <Col sm={4} className={styles.colStyles}>
          <h5>Delivery Methods</h5>
          <div>self pick up</div>
          <div>SF Express</div>
        </Col>
        <Col sm={4}>
          <h5>Payment Methods</h5>
          <div>Cash (outlet only)</div>
          <div>PAYME</div>
          <div>FPS</div>
          <div>PAYPAL(VISA/MASTER)</div>
          <div>Bank transfer</div>
        </Col>
        <Col sm={4}>
          <h5>Contact Methods</h5>
          <div>FaceBook</div>
          <div>Instagram</div>
          <div>Whatsapp</div>
        </Col>
      </Row>
    </Container>
  );
}
