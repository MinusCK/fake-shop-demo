import {
  getAllPruduct,
  getCategories,
  getCategoriesProduct,
} from "@/pages/api/api-util";
import ProductCardHome from "@/pages/components/productCardHome";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
const CategoreDetail = (props: { filProduct: any; categorie: any }, {}) => {
  const router = useRouter();
  const [categorie, setCategorie] = useState("");

  useEffect(() => {
    const name = router.query.categorieId;
    const categorieArray = props.categorie;
    const categorieData = categorieArray.find(
      (categorie: any) => categorie.categories === name
    );
    if (categorieData) {
      setCategorie(categorieData.name);
    }
  }, [categorie]);

  return (
    <Container fluid>
      <Head>
        <title>{categorie}</title>
      </Head>
      <h1>{categorie}</h1>
      <div></div>
      <Row>
        {props.filProduct.map((product: any) => (
          <ProductCardHome data={product} key={product.id} />
        ))}
      </Row>
    </Container>
  );
};

export const getStaticPaths = async () => {
  const response = await fetch(
    "https://nextjs-shop-data-default-rtdb.firebaseio.com/categories.json"
  );
  const data = await response.json();
  const allCategore = [];
  for (const key in data) {
    allCategore.push({
      id: key,
      ...data[key],
    });
  }

  const paths = allCategore.map((product) => ({
    params: { categorieId: product.id },
  }));
  return {
    paths: paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async (context: { params: any }) => {
  const categorieId = context.params.categorieId;
  const fproduct = await getCategoriesProduct(categorieId);
  const categorie = await getCategories();
  return {
    props: {
      filProduct: fproduct,
      categorie: categorie,
      fallback: false,
    },
  };
};

export default CategoreDetail;
