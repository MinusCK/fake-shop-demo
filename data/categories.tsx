import { StaticImageData } from "next/image";

interface fakeDatabase {
  users: { id: number; name: string; categories: string }[];
  products: {
    id: number;
    name: string;
    price: number;
    image: string | StaticImageData;
  }[];
  orders: { id: number; userId: number; productId: number; quantity: number }[];
}

const fakeDatabase = {
  categories: [
    { id: 1, name: "S.H.Figuarts", categories: "shf" },
    { id: 2, name: "Metal Build", categories: "metalbuild" },
    { id: 3, name: "Nendoroid", categories: "nendoroid" },
  ],
  products: [
    {
      id: 1,
      name: "GOKAI RED",
      price: 123,
      image: "assets/images/shf/GOKAIRED.jpg",
      categories: "shf",
    },
    {
      id: 2,
      name: "MASKED RIDER KUUGA RISING DRAGON FORM",
      price: 19.99,
      image: "src/pages/assets/images/shf/KUUGARISINGDRAGONFORM.jpg",
      categories: "shf",
    },
    {
      id: 3,
      name: "CLAWs・SASORI",
      price: 7.99,
      image: "src/pages/assets/images/shf/CLAWSASORI.jpg",
      categories: "shf",
    },
    {
      id: 4,
      name: "RIDERMAN",
      price: 7.99,
      image: "src/pages/assets/images/shf/RIDERMAN.jpg",
      categories: "shf",
    },
    {
      id: 5,
      name: "KAMEN RIDER BIRTH",
      price: 7.99,
      image: "src/pages/assets/images/shf/BIRTH.jpg",
      categories: "shf",
    },
    {
      id: 6,
      name: "MASKED RIDER No.1",
      price: 7.99,
      image: "src/pages/assets/images/shf/GOKAIRED.jpg",
      categories: "shf",
    },
    {
      id: 7,
      name: "ULTRAMAN DYNA FLASH TYPE",
      price: 7.99,
      image: "src/pages/assets/images/shf/NO1.jpg",
      categories: "shf",
    },
    {
      id: 8,
      name: "MASKED RIDER AGITO TRINITY FORM",
      price: 7.99,
      image: "src/pages/assets/images/shf/AGITOTRINITYFORM.jpg",
      categories: "shf",
    },
    {
      id: 9,
      name: "KAMEN RIDER WIZARD FLAME DRAGON / ALL DRAGON",
      price: 7.99,
      image: "src/pages/assets/images/shf/WIZARDALLDARGON.jpg",
      categories: "shf",
    },
    {
      id: 10,
      name: "KAMEN RIDER WIZARD Flame Style 10th Anniversary Ver.",
      price: 7.99,
      image: "src/pages/assets/images/shf/WIZARD.jpg",
      categories: "shf",
    },
    {
      id: 11,
      name: "KAMEN RIDER DOUBLE CYCLONE JOKER EXTREME",
      price: 7.99,
      image:
        "src/pagessrc/pages/assets/images/shf/DOUBLECYCLONEJOKEREXTREME.jpg",
      categories: "shf",
    },
    {
      id: 12,
      name: "MASKED RIDER V3",
      price: 7.99,
      image: "src/pages/assets/images/shf/V3.jpg",
      categories: "shf",
    },
    {
      id: 13,
      name: "KAMEN RIDER OOO TAJADOLCOMBOETERNITY",
      price: 7.99,
      image: "src/pages/assets/images/shf/TAJADOLCOMBOETERNITY.jpg",
      categories: "shf",
    },
    {
      id: 14,
      name: "MASKED RIDER KUUGA TITAN FORM",
      price: 7.99,
      image: "src/pages/assets/images/shf/KUUGATITANFORM.jpg",
      categories: "shf",
    },
  ],
  orders: [
    { id: 1, userId: 2, productId: 1, quantity: 2 },
    { id: 2, userId: 1, productId: 3, quantity: 1 },
    { id: 3, userId: 3, productId: 2, quantity: 3 },
  ],
};

export default fakeDatabase;
