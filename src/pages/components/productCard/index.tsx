import { Card, Col } from "react-bootstrap";
import fs from "fs";
import path from "path";
import fakeDataBase from "../../../../data/categories";
import styles from "@/styles/card.module.css";
// import img from "/assets/images/shf/DOUBLECYCLONEJOKEREXTREME.jpg";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

const ProductCard = (props: { data: any }) => {
  return (
    <Col md={4} xl={3} className={styles.cardRow}>
      <Link href={`/product/${props.data.id}`} className={styles.link}>
        <Card className={styles.cardLayout}>
          <Card.Img variant="top" src={props.data.image} />
          <Card.Body>
            <Card.Title>{props.data.name}</Card.Title>
            <Card.Text>Price :{props.data.price}</Card.Text>
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

export default ProductCard;
