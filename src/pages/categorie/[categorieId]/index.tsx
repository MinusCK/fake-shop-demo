import { getAllPruduct, getCategoriesProduct } from "@/pages/api/api-util";
import { useRouter } from "next/router";

const CategoreDetail = (props: { filProduct: any }, {}) => {
  // const router = useRouter();
  // const data = router.query;
  console.log(props.filProduct);
  return <div>CategoreDetail</div>;
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
  // const products = await getAllPruduct();
  // const filterProducts = products.filter(
  //   (product: { categories: string }) => product.categories === categorieId
  // );
  // const product = Object.keys(filterProducts).map((key: any) => [
  //   filterProducts[key],
  // ]);
  // const filteredArray = [...filterProducts];

  return {
    props: {
      filProduct: fproduct,
      fallback: false,
    },
  };
};

export default CategoreDetail;
