import styles from "@/styles/categories.module.css";
import { useState } from "react";
import fakeDatabase from "../../../../data/categories";
import Link from "next/link";
import { Search, ChevronRight, ChevronDown } from "react-bootstrap-icons";
import { GetStaticProps } from "next";
// import { getCategories } from "@/pages/api/api-util";
// import { getCategories } from "@/pages/api/api-util";

const Categories = (props: { categories: any }) => {
  const [openCategories, setOpenCategories] = useState(false);
  const handleOpenCategorie = () => {
    console.log("clicked");
    setOpenCategories(!openCategories);
  };

  console.log(props.categories);
  return (
    <div className={styles.categoriesLayout}>
      <div>
        <form className={styles.searchBar}>
          <input></input>
          <button>
            <Search />
          </button>
        </form>

        <h1>Categories</h1>
        <div className={styles.categoriesList}>
          <p>All items</p>
          <div onClick={() => handleOpenCategorie()}>
            {openCategories ? <ChevronDown /> : <ChevronRight />}
          </div>
        </div>
        <div>
          <div style={openCategories ? {} : { display: "none" }}>
            {props.categories.map((event: any) => {
              return (
                <div key={event.id}>
                  <Link href={`/categorie/${event.categories}`}>
                    {event.name}
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
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

export default Categories;
