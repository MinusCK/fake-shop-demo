import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/home.module.css";
import { GetStaticProps } from "next";
import { getAllPruduct } from "./api/api-util";
import { Container, Row } from "react-bootstrap";
import ProductCard from "./components/productCard";
import ProductCardHome from "./components/productCardHome";

const inter = Inter({ subsets: ["latin"] });

export default function Home(props: { allProduct: any }) {
  const shfProducts = props.allProduct.filter(
    (product: { categories: string }) => product.categories === "shf"
  );
  const mbProducts = props.allProduct.filter(
    (product: { categories: string }) => product.categories === "metalbuild"
  );
  const nenProducts = props.allProduct.filter(
    (product: { categories: string }) => product.categories === "nendoroid"
  );
  // console.log(filteredProducts);
  return (
    // <Container fluid>
    <div className={styles.homeLayout}>
      <div>
        <h2 className={styles.categoriesTitle}>S.H.Figuarts</h2>
        <div>
          <Row>
            {shfProducts.map((event: any) => {
              return <ProductCardHome data={event} key={event.id} />;
            })}
          </Row>
        </div>
      </div>
      <div className={styles.productGroup}>
        <h2>Metal Build</h2>
        <div>
          <Row>
            {mbProducts.map((event: any) => {
              return <ProductCardHome data={event} key={event.id} />;
            })}
          </Row>
        </div>
      </div>
      <div>
        <h2>Nendoroid</h2>
        <div>
          <Row>
            {nenProducts.map((event: any) => {
              return <ProductCardHome data={event} key={event.id} />;
            })}
          </Row>
        </div>
      </div>
    </div>
    // </Container>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const allProduct = await getAllPruduct();
  return {
    props: {
      allProduct: allProduct,
    },
  };
};
