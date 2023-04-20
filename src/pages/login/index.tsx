import { Button, ButtonGroup, FloatingLabel, Form } from "react-bootstrap";
import styles from "@/styles/login.module.css";

export default function LoginPage() {
  return (
    <div className={styles.loginLayout}>
      <div className={styles.loginArea}>
        <ButtonGroup aria-label="Basic example" className={styles.buttonGroup}>
          <Button className={styles.button}>Sign in</Button>
          <Button className={styles.button}>Login</Button>
        </ButtonGroup>
        <div className={styles.formArea}>
          <FloatingLabel
            controlId="floatingInput"
            label="Email address"
            className="mb-3"
          >
            <Form.Control type="email" placeholder="name@example.com" />
          </FloatingLabel>
          <FloatingLabel controlId="floatingPassword" label="Password">
            <Form.Control type="password" placeholder="Password" />
          </FloatingLabel>
        </div>
      </div>
    </div>
  );
}
