import { useRouter } from "next/router";
import { getPruductDetail, getAllPruduct } from "../../api/api-util";
import { InferGetStaticPropsType } from "next";
import { Button, Col, Container, Row } from "react-bootstrap";
import styles from "@/styles/productDetail.module.css";
import Image from "next/image";
import { Plus, Dash } from "react-bootstrap-icons";
import { useEffect, useState } from "react";
import classNames from "classnames";
import Head from "next/head";
import Link from "next/link";

const ProductDetail = ({
  selectProduct,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [quantity, setQuantity] = useState(1);
  const product = selectProduct;
  const imgUrl = selectProduct[2][0];
  const handleAddQuantity = () => {
    setQuantity(quantity + 1);
  };
  const handleMinusQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };
  const nameTag = selectProduct[0][0];
  console.log(nameTag);
  const handleTag = () => {
    switch (nameTag) {
      case "shf":
        return (
          <Link href={`/categorie/${nameTag}`} className={styles.link}>
            <div
              className={styles.cTag}
              style={{ backgroundColor: "rgb(212, 64, 64)" }}
            >
              S.H.Figuarts
            </div>
          </Link>
        );
        break;
      case "metalbuild":
        return (
          <Link href={`/categorie/${nameTag}`} className={styles.link}>
            <div
              className={styles.cTag}
              style={{ backgroundColor: "rgb(50, 80, 214)" }}
            >
              Metal Build
            </div>
          </Link>
        );
        break;
      case "nendoroid":
        return (
          <Link href={`/categorie/${nameTag}`} className={styles.link}>
            <div
              className={styles.cTag}
              style={{ backgroundColor: "rgb(225, 219, 115)" }}
            >
              Nendoroid
            </div>
          </Link>
        );
    }
  };
  return (
    <Container fluid>
      <Head>
        <title>{selectProduct[3]}</title>
      </Head>
      <Row>
        <Col sm={12} md={6}>
          <Image
            src={imgUrl}
            width={1000}
            height={500}
            layout="responsive"
            alt="produtimg"
          ></Image>
        </Col>
        <Col sm={12} md={6}>
          <h1>{selectProduct[3]}</h1>
          <div style={{ display: "flex" }}>
            {handleTag()}
            <div style={{ flex: "1" }}></div>
          </div>
          <br />

          <div style={{ fontSize: "20px" }}>Price:{selectProduct[4]}</div>
          <div>Arrived Date: N/A</div>
          <br />
          <div>
            <div>QUANTITY</div>
            <div className={styles.quantityBtnSet}>
              <Button
                size="sm"
                onClick={() => {
                  handleMinusQuantity();
                }}
                className={classNames(styles.button)}
              >
                <Dash className={classNames(styles.iconColor)} />
              </Button>
              <input
                type="text"
                id="quantity"
                name="quantity"
                value={quantity}
                onChange={(e) => setQuantity(+e.target.value)}
              />{" "}
              <Button
                size="sm"
                onClick={() => {
                  handleAddQuantity();
                }}
                className={classNames(styles.button)}
              >
                <Plus />
              </Button>
            </div>
          </div>
          <div className={styles.cartBtnGroup}>
            <Button className={classNames(styles.button)}>Add To cart</Button>
            <div className={styles.gap}></div>
            <Button className={classNames(styles.button)}>Buy Now</Button>
          </div>
        </Col>

        <Row>
          <div className={styles.lineTop}></div>
          <h2 style={{ textAlign: "center" }}>
            Terms and Conditions for Pre-orders:
          </h2>
          <ul className={styles.ulStyle}>
            <li>
              1. This is a pre-order deposit and the balance must be paid upon
              collection.
            </li>
            <li>
              2. Once an order for a product has been placed, the pre-order
              deposit is non-refundable and the product cannot be exchanged for
              a different style.
            </li>
            <li>
              3. Customers must collect their order and pay the balance within
              14 days of receiving the collection notification email. Failure to
              do so will result in the forfeiture of the pre-order deposit and
              the product will no longer be available for collection.
            </li>
            <li>
              4. When placing an order, customers are required to provide their
              full name, a valid contact number, and email address to facilitate
              collection arrangements and customer service.
            </li>
            <li>
              5. Products cannot be returned or exchanged, but if any defective
              accessories are found, the product can be exchanged once. This
              does not include damage caused by packaging, human error, or paint
              issues.
            </li>
            <li>
              6. The final product may differ slightly from the official images
              in terms of details and accessories.
            </li>
            <li>
              7. If there is a delay in the shipment date, the information will
              be updated on the website.
            </li>
            <li>
              8. In case of any dispute, MinusShop reserves the right of final
              decision.
            </li>
          </ul>
        </Row>
      </Row>
    </Container>
  );
};

export const getStaticPaths = async () => {
  const products = await getAllPruduct();
  const paths = products.map((product) => ({
    params: { productId: product.id },
  }));
  return {
    paths: paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async (context: { params: any }) => {
  const productId = context.params.productId;
  //   const product: SelectProduct = await getPruductDetail(productId);
  const response = await fetch(
    `https://nextjs-shop-data-default-rtdb.firebaseio.com/products/${productId}.json`
  );
  const data = await response.json();
  const product = Object.keys(data).map((key) => [data[key]]);
  return {
    props: {
      selectProduct: product,
      fallback: false,
    },
  };
};

export default ProductDetail;
