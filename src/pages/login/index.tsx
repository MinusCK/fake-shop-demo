import {
  Button,
  ButtonGroup,
  Col,
  FloatingLabel,
  Form,
  Row,
} from "react-bootstrap";
import styles from "@/styles/login.module.css";
import { useState } from "react";
import Head from "next/head";

export default function LoginPage() {
  const [btnSwitch, setBtnSwitch] = useState(2);

  const handleSwitch = (e: number) => {
    setBtnSwitch(e);
  };
  const formSwitch = () => {
    switch (btnSwitch) {
      case 1:
        return (
          <div>
            <div className={styles.signUpTitle}>Sign Up With Email</div>
            <Form>
              <Row className="mb-3">
                <Form.Group controlId="formGridName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter your name" />
                </Form.Group>
                <Form.Group controlId="formGridEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group controlId="formGridPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
              </Row>
              <Button type="submit" className={styles.loginBtn}>
                Submit
              </Button>
            </Form>
          </div>
        );
        break;
      case 2:
        return (
          <>
            <div className={styles.signUpTitle}>Login With Email</div>
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
            <Button className={styles.loginBtn}>Login</Button>
          </>
        );
        break;
    }
  };
  return (
    <div className={styles.loginLayout}>
      <Head>
        <title>Login</title>
      </Head>
      <div className={styles.loginArea}>
        <ButtonGroup aria-label="Basic example" className={styles.buttonGroup}>
          <Button
            className={styles.button}
            onClick={() => {
              handleSwitch(1);
            }}
          >
            Sign up
          </Button>
          <Button
            className={styles.button}
            onClick={() => {
              handleSwitch(2);
            }}
          >
            Login
          </Button>
        </ButtonGroup>
        <div className={styles.formArea}>{formSwitch()}</div>
      </div>
    </div>
  );
}
