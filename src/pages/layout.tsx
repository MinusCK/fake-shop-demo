import Footer from "./components/footer";
import MainHeader from "./components/mainHeader";
import { Col, Row } from "react-bootstrap";
import NavBar from "./components/navBar";
import Categories from "./components/categories";
import useSWR from "swr";
import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
const fetcher = (url: string) => axios.get(url).then((res) => res.data);
const Layout = ({ children }: { children: React.ReactNode }) => {
  const { data, error, isLoading } = useSWR(
    "https://nextjs-shop-data-default-rtdb.firebaseio.com/categories.json",
    fetcher
  );

  const events = [];
  const router = useRouter();
  for (const key in data) {
    events.push({
      id: key,
      ...data[key],
    });
  }

  const shouldRenderCategories =
    router.pathname !== "/" && router.pathname !== "/login";
  return (
    <>
      <MainHeader />
      <NavBar categories={events} />
      <Row>
        {shouldRenderCategories && (
          <Col md={3}>
            <Categories categories={events} />
          </Col>
        )}

        <Col className="childrenStyle">{children}</Col>
      </Row>

      <Footer />
    </>
  );
};

export default Layout;
