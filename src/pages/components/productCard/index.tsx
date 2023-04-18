import { Card, Col } from "react-bootstrap";
import fs from "fs";
import path from "path";
import fakeDataBase from "../../../../data/categories";
import styles from "@/styles/card.module.css";
// import img from "/assets/images/shf/DOUBLECYCLONEJOKEREXTREME.jpg";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

const ProductCard = (props: { data: any }) => {
  console.log(props.data);

  return (
    <Col md={4} xl={3} className={styles.cardRow}>
      <Link href={`/product/${props.data.id}`}>
        <Card className={styles.cardLayout}>
          <Card.Img variant="top" src={props.data.image} />
          <Card.Body>
            <Card.Title>{props.data.name}</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
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
