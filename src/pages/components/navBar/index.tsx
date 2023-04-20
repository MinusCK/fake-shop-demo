import styles from "@/styles/navBar.module.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import fakeDataBase from "../../../../data/categories";
import Link from "next/link";
import logo from "../../assets/images/logo-01.png";
// import { getCategories } from "@/pages/api/api-util";
import Image from "next/image";
import classNames from "classnames";
const NavBar = (props: { categories: any }) => {
  return (
    <div className={styles.navLayout}>
      <Navbar.Brand href="/">
        <Image src={logo} alt="logo" width={100} height={100} />
      </Navbar.Brand>
      <Nav className="justify-content-end" activeKey="/home">
        <Nav.Item>
          <Nav.Link href="/" style={{ color: "rgb(8, 131, 149)" }}>
            <div className={styles.navlink}>Home</div>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/product" style={{ color: "rgb(8, 131, 149)" }}>
            All Items
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <NavDropdown
            title={
              <span style={{ color: "rgb(8, 131, 149)" }}>Categories</span>
            }
            id="basic-nav-dropdown"
          >
            {props.categories.map((event: any) => {
              return (
                <div key={event.id}>
                  <NavDropdown.Item
                    href={`/categorie/${event.categories}`}
                    style={{ color: "rgb(8, 131, 149)" }}
                  >
                    {event.name}
                  </NavDropdown.Item>
                </div>
              );
            })}
          </NavDropdown>
        </Nav.Item>
      </Nav>
    </div>
  );
};

export default NavBar;

// export const getStaticProps = async () => {
//   const categoriesData = await getCategories();
//   return {
//     props: {
//       categories: categoriesData,
//     },
//   };
// };
