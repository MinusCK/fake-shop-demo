import useSWR from "swr";
const fetcher = (url) => axios.get(url).then((res) => res.data);

export async function getCategories() {
  const response = await fetch(
    "https://nextjs-shop-data-default-rtdb.firebaseio.com/categories.json",
    fetcher
  );
  const data = await response.json();
  const categories = [];
  for (const key in data) {
    categories.push({
      id: key,
      ...data[key],
    });
  }
  // console.log(`"events:"${JSON.stringify(events)}`);
  return categories;
}

export async function getAllPruduct() {
  const response = await fetch(
    "https://nextjs-shop-data-default-rtdb.firebaseio.com/products.json"
  );
  const data = await response.json();

  const allPruduct = [];

  for (const key in data) {
    allPruduct.push({
      id: key,
      ...data[key],
    });
  }

  console.log(allPruduct);
  return allPruduct;
}

export const getPruductDetail = async (id) => {
  const allPruduct = await getAllPruduct();
  return allPruduct.find((product) => product.id === id);
};

export const getCategoriesProduct = async (categorie) => {
  const allPruduct = await getAllPruduct();
  return allPruduct.filter((product) => product.categories === categorie);
};
