import styles from "@/styles/navBar.module.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import fakeDataBase from "../../../../data/categories";
import Link from "next/link";
// import { getCategories } from "@/pages/api/api-util";

const NavBar = (props: { categories: any }) => {
  console.log(props.categories);
  return (
    <Nav className="justify-content-end" activeKey="/home">
      <Nav.Item>
        <Nav.Link href="/">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/product">All Items</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <NavDropdown title="Categories" id="basic-nav-dropdown">
          {props.categories.map((event: any) => {
            return (
              <div key={event.id}>
                <NavDropdown.Item href={`/categorie/${event.categories}`}>
                  {event.name}
                </NavDropdown.Item>
              </div>
            );
          })}
        </NavDropdown>
      </Nav.Item>
    </Nav>
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
