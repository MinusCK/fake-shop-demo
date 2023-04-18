import { Breadcrumb, Container, Row } from "react-bootstrap";
import fakeDatabase from "../../../data/categories";
import ProductCard from "../components/productCard";
import { getAllPruduct } from "../api/api-util";
import { GetStaticProps } from "next";

// interface ProductCardProps {
//   data1: any;
//   onClick: () => ;
// }

const AllProductPage = (props: { allProduct: any }) => {
  getAllPruduct();
  console.log(props.allProduct);
  const product = props.allProduct;

  return (
    <Container>
      <Breadcrumb>
        <Breadcrumb.Item href="/product">All items</Breadcrumb.Item>
      </Breadcrumb>
      <div>
        <Row>
          {product.map((event: any) => {
            return <ProductCard data={event} key={event.id} />;
          })}
        </Row>
      </div>
    </Container>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const allProduct = await getAllPruduct();
  return {
    props: {
      allProduct: allProduct,
    },
  };
};

export default AllProductPage;