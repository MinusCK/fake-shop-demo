import { useRouter } from "next/router";
import { getPruductDetail, getAllPruduct } from "../../api/api-util";
import { InferGetStaticPropsType } from "next";
import { Button, Col, Row } from "react-bootstrap";
import styles from "@/styles/productDetail.module.css";
import Image from "next/image";
import { Plus, Dash } from "react-bootstrap-icons";
import { useState } from "react";

const ProductDetail = ({
  selectProduct,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [quantity, setQuantity] = useState(1);
  const product = selectProduct;
  console.log(selectProduct);
  const imgUrl = selectProduct[2][0];
  const handleAddQuantity = () => {
    setQuantity(quantity + 1);
  };
  const handleMinusQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  return (
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
        <p>Price:{selectProduct[4]}</p>
        <p>Arrived Date:</p>

        <p>{selectProduct[4]}</p>
        <div>
          <div>QUANTITY</div>
          <div className={styles.quantityBtnSet}>
            <Button
              size="sm"
              onClick={() => {
                handleAddQuantity();
              }}
            >
              <Plus />
            </Button>
            <input type="text" id="quantity" name="quantity" value={quantity} />
            <Button
              size="sm"
              onClick={() => {
                handleMinusQuantity();
              }}
            >
              <Dash />
            </Button>
          </div>
        </div>
        <div>
          <Button>Add To cart</Button>

          <Button>Buy Now</Button>
        </div>
      </Col>

      <Row>
        <div className={styles.lineTop}></div>
        <h2>Terms and Conditions for Pre-orders:</h2>
        <ul>
          <li>
            1. This is a pre-order deposit and the balance must be paid upon
            collection.
          </li>
          <li>
            2. Once an order for a product has been placed, the pre-order
            deposit is non-refundable and the product cannot be exchanged for a
            different style.
          </li>
          <li>
            3. Customers must collect their order and pay the balance within 14
            days of receiving the collection notification email. Failure to do
            so will result in the forfeiture of the pre-order deposit and the
            product will no longer be available for collection.
          </li>
          <li>
            4. When placing an order, customers are required to provide their
            full name, a valid contact number, and email address to facilitate
            collection arrangements and customer service.
          </li>
          <li>
            5. Products cannot be returned or exchanged, but if any defective
            accessories are found, the product can be exchanged once. This does
            not include damage caused by packaging, human error, or paint
            issues.
          </li>
          <li>
            6. The final product may differ slightly from the official images in
            terms of details and accessories.
          </li>
          <li>
            7. If there is a delay in the shipment date, the information will be
            updated on the website.
          </li>
          <li>
            8. In case of any dispute, MinusShop reserves the right of final
            decision.
          </li>
        </ul>
      </Row>
    </Row>
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
  console.log(data);
  const product = Object.keys(data).map((key) => [data[key]]);
  //   const product = [];

  //   for (const key in data) {
  //     product.push({
  //       id: key,
  //       ...data[key],
  //     });
  //   }
  return {
    props: {
      selectProduct: product,
      fallback: false,
    },
  };
};

export default ProductDetail;
