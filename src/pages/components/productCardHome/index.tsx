import { Card, Col } from "react-bootstrap";
import fs from "fs";
import path from "path";
import fakeDataBase from "../../../../data/categories";
import styles from "@/styles/cardHome.module.css";
// import img from "/assets/images/shf/DOUBLECYCLONEJOKEREXTREME.jpg";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

const ProductCardHome = (props: { data: any }) => {
  console.log(props.data);

  return (
    <Col sm={6} md={4} xl={2} className={styles.cardRow}>
      <Link href={`/product/${props.data.id}`} className={styles.link}>
        <Card className={styles.cardLayout}>
          <Card.Img variant="top" src={props.data.image} />
          <Card.Body>
            <Card.Title className={styles.productTitle}>
              {props.data.name}
            </Card.Title>
            {/* <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text> */}
          </Card.Body>
        </Card>
      </Link>
    </Col>
  );
};
// export function getStaticProps() {
//   return {
//     props: {
//       data: fakeDataBase,
//     },
//   };
// }

export default ProductCardHome;
