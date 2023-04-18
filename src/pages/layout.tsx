import Footer from "./components/footer";
import MainHeader from "./components/mainHeader";
import { Col, Container, Row } from "react-bootstrap";
import NavBar from "./components/navBar";
// import { getCategories } from "./api/api-util";
import Categories from "./components/categories";
import { getAllPruduct } from "./api/api-util";
import { GetStaticProps } from "next";
import useSWR from "swr";
import axios from "axios";
import { useState } from "react";
const fetcher = (url: string) => axios.get(url).then((res) => res.data);
const Layout = ({ children }: { children: React.ReactNode }) => {
  const [loadCategories, setLoadCategories] = useState(false);
  const { data, error, isLoading } = useSWR(
    "https://nextjs-shop-data-default-rtdb.firebaseio.com/categories.json",
    fetcher
  );

  const events = [];
  for (const key in data) {
    events.push({
      id: key,
      ...data[key],
    });
  }

  return (
    <>
      <MainHeader />
      <NavBar categories={events} />
      {/* <Container fluid> */}
      <Row>
        <Col md={3}>
          <Categories categories={events} />
        </Col>
        <Col md={9}>{children}</Col>
      </Row>
      {/* </Container> */}
      <Footer />
    </>
  );
};

// export const getStaticProps: GetStaticProps = async () => {
//   const categoriesData = await getCategories();
//   console.log(`test:${categoriesData}`);
//   return {
//     props: {
//       categories: categoriesData,
//     },
//   };
// };

export default Layout;
