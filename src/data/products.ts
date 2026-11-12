export interface Product {
  name: string;
  category: string;
  gender: string;
  price:number;
  isOnSale?: boolean;
  image: string;
  label: string;
}

export const products: Product[] = [
  {
    name: "OVERSIZED JACKET",
    category: "OUTERWEAR",
    gender: "MEN",
    price: 180,
    isOnSale: false,
    image:
      "https://images.openai.com/static-rsc-4/2Z4nxNt4xVOvqlRWh27uJ8WTOoc_t2ihusX81uP84xy-6HvSMmhtCPzYdAkUdmUvy_3DEhuAliAHPiBmIyLbmMET9EeXbLYAItCDr55QN-MS7g9PjN8nuwqrw0vpLZHdD22hn0Eb8oi-YCHkb_nZPXS4slth4qHtDzTvgEAtCA7o8ZQPijX1l3QCEK1Cqg_8?purpose=fullsize",
    label: "NEW",
  },
  {
    name: "ESSENIAL T-SHIRT",
    category: "BASICS",
    gender: "UNISEX",
    price: 65,
    image:
      "https://images.openai.com/static-rsc-4/eGzz12OaZYNx1qwSl5JmNdVUegNRg0heRCDQQl-qgQk9lPhwfLSSvksHCE5GFBv1JR_asRqMi0s8DzXyi9U-VLEfgK0zkTTHo_BLau3MUBeCV5ffareloYT6l9lOMIzd_4_hFS_X6LPD0RWU9dxIgQ5ePLbb0ljlll5x-GUp2ULeLj_nm-33QDN_OCpV0Qwk?purpose=fullsize",
    label: "NEW",
  },
  {
    name: "STRUCTURED COAT",
    category: "OUTERWEAR",
    gender: "MEN",
    price: 240,
    isOnSale: true,
    image:
      "https://images.openai.com/static-rsc-4/-SUegwRi495AUh-BjSY73AkFRmU_5oMt5AQHNe2qqI4Q0opnB5dcnba4Pgeua0O6nSybkGwEPWdQK9WqiB3xvRuGEqWGR4l_6q0bpqhjaYeUuT--uhDyLrSIjRVOuLW7-2sTRDDusKISg1-SERI5xMf-9EJJ9LWi_3ouWGy9O_KOXxGGSBGpe1l9bdkDgelV?purpose=fullsize",
    label: "CORE PIECE",
  },
  {
    name: "DAILY ESSENTIALS",
    category: "BASICS",
    gender: "UNISEX",
    price: 90,
    isOnSale: true,
    image:
      "https://images.openai.com/static-rsc-4/JiPODDgcDx6_Y7SvykOSG7CSt6hqK4fBrE1TnE4NhrrRojElH5WdTY2pUdZKSMJudvzK7jDpSYzzg5YkLY3aoSNspBw51aC96omDlC2C7t_IhSl6Xd4TGCaeNFLCbACouNhkxRcSI_W5XrssvfbY9G202vqt_bs3vDb9o894XDw9kWjBoHBCdx0yBOvps2Gi?purpose=fullsize",
    label: "CORE PIECE",
  },
  {
    name: "OVERSIZED HOODIE",
    category: "BASICS",
    gender: "MEN",
    price: 95,
    isOnSale: false,
    image:
      "https://i.pinimg.com/736x/ac/d8/02/acd802564f9466d0f585a329e23efd84.jpg",
    label: "NEW",
  },
  {
    name: "RELAXED SHIRT",
    category: "BASICS",
    gender: "WOMEN",
    price: 85,
    isOnSale: true,
    image:
      "https://i.pinimg.com/1200x/e8/56/7e/e8567ea129d7be3893994c821c70dd0d.jpg",
    label: "",
  },
  {
    name: "WIDE-LEG TROUSERS",
    category: "BOTTOMS",
    gender: "WOMEN",
    price: 120,
    isOnSale: true,
    image:
      "https://i.pinimg.com/736x/94/73/d2/9473d20e902f6d6162d1260dc4819071.jpg",
    label: "CORE PIECE",
  },
  {
    name: "LONG COAT",
    category: "OUTERWEAR",
    gender: "MEN",
    price: 260,
    image:
      "https://i.pinimg.com/1200x/9d/f9/1b/9df91bd165911481611a427a4b9cbd94.jpg",
    label: "",
  },
  {
    name: "MINIMALIST BOMBER",
    category: "OUTERWEAR",
    gender: "MEN",
    price: 195,
    isOnSale: true,
    image:
      "https://i.pinimg.com/736x/c7/07/16/c707161efc9e3586cff85922d2d9c493.jpg",
    label: "NEW",
  },
  {
    name: "AMP T-SHIRT",
    category: "BASICS",
    gender: "MEN",
    price: 55,
    isOnSale: false,
    image:
      "https://i.pinimg.com/736x/2c/dc/09/2cdc09d4f50e4a4aaccbce94b2003814.jpg",
    label: "",
  },
  {
    name: "WIDE-LEG DENIM",
    category: "BOTTOMS",
    gender: "MEN",
    price: 110,
    isOnSale: true,
    image:
      "https://i.pinimg.com/736x/e4/2e/24/e42e24d2776f9477760b58d0d356e15d.jpg",
    label: "CORE PIECE",
  },
  {
    name: "STRUCTURED BLAZER",
    category: "OUTERWEAR",
    gender: "MEN",
    price: 220,
    isOnSale: true,
    image:
      "https://i.pinimg.com/736x/ed/dc/d0/eddcd036489db2a331315b52ec29a107.jpg",
    label: "NEW",
  },
  {
    name: "OVERSIZED SWEATSHIRT",
    category: "BASICS",
    gender: "MEN",
    price: 100,
    isOnSale: false,
    image:
      "https://i.pinimg.com/736x/7f/a9/ff/7fa9ff898e78834c6232742158b1ae3d.jpg",
    label: "",
  },
  {
    name: "TAILORED TROUSERS",
    category: "BOTTOMS",
    gender: "MEN",
    price: 135,
    isOnSale: true,
    image:
      "https://i.pinimg.com/736x/b8/b7/9e/b8b79e07934b1050ff7bf62d7443326d.jpg",
    label: "CORE PIECE",
  },
  {
    name: "ESSENTIAL LONGSLEEVE",
    category: "BASICS",
    gender: "UNISEX",
    price: 70,
    isOnSale: false,
    image:
      "https://i.pinimg.com/736x/07/5d/a4/075da4c5a6eab89fa2b5da9d2915bcc6.jpg",
    label: "",
  },
  {
    name: "TECHNICAL JACKET",
    category: "OUTERWEAR",
    gender: "MEN",
    price: 250,
    isOnSale: false,
    image:
      "https://i.pinimg.com/736x/9b/88/b0/9b88b0eb5e619ec1b9c4381655510803.jpg",
    label: "NEW",
  },
  {
    name: "CROPPED BOMBER",
    category: "OUTERWEAR",
    gender: "UNISEX",
    price: 210,
    isOnSale: true,
    image:
      "https://i.pinimg.com/736x/5f/0b/0b/5f0b0b701d53d8eaa7ea7604e4c95b9f.jpg",
    label: "NEW",
  },
  {
    name: "HEAVYWEIGHT TEE",
    category: "BASICS",
    gender: "MEN",
    price: 60,
    isOnSale: false,
    image:
      "https://i.pinimg.com/1200x/e4/b4/8f/e4b48f8d565ebec4df30df91e9758181.jpg",
    label: "CORE PIECE",
  },
  {
    name: "RELAXED DENIM",
    category: "BOTTOMS",
    gender: "MEN",
    price: 115,
    isOnSale: true,
    image:
      "https://i.pinimg.com/1200x/4e/1e/dd/4e1edd2ea0fce0f630a77e52cde7e72c.jpg",
    label: "",
  },
  {
    name: "WOOL OVERCOAT",
    category: "OUTERWEAR",
    gender: "MEN",
    price: 280,
    isOnSale: false,
    image:
      "https://i.pinimg.com/736x/36/6d/00/366d00dadabfb8228179dad23be22b74.jpg",
    label: "NEW",
  },
  {
    name: "BOXY SWEATSHIRT",
    category: "BASICS",
    gender: "MEN",
    price: 105,
    isOnSale: true,
    image:
      "https://i.pinimg.com/736x/d6/5b/48/d65b48990ded5f406b8f3ec9af43d6ed.jpg",
    label: "",
  },
  {
    name: "PLEATED WIDE PANTS",
    category: "BOTTOMS",
    gender: "UNISEX",
    price: 140,
    isOnSale: false,
    image:
      "https://i.pinimg.com/736x/38/72/e2/3872e272b8bda0c7b36a1f3df0a4f433.jpg",
    label: "CORE PIECE",
  },
  {
    name: "CLEAN CUT LONGSLEEVE",
    category: "BASICS",
    gender: "UNISEX",
    price: 75,
    isOnSale: false,
    image:
      "https://i.pinimg.com/736x/f3/99/a8/f399a81128b97728efb70c6613ec0e61.jpg",
    label: "",
  },
  {
    name: "UTILITY SHELL JACKET",
    category: "OUTERWEAR",
    gender: "WOMEN",
    price: 235,
    isOnSale: false,
    image:
      "https://i.pinimg.com/1200x/bd/d2/bb/bdd2bb0e4fb4b1ddef9cd15535c812df.jpg",
    label: "NEW",
  },
  {
    name: "CHUNKY LOW SNEAKERS",
    category: "SHOES",
    gender: "MEN",
    price: 145,
    isOnSale: true,
    image:
      "https://i.pinimg.com/1200x/3e/71/80/3e71807a9505b61e909e7a797f122519.jpg",
    label: "NEW",
  },
  {
    name: "MINIMAL LEATHER SNEAKERS",
    category: "SHOES",
    gender: "MEN",
    price: 175,
    isOnSale: false,
    image:
      "https://i.pinimg.com/1200x/ed/e4/83/ede483f3fd665c444e05b775a9b2833c.jpg",
    label: "CORE PIECE",
  },
  {
    name: "TECHNICAL RUNNER",
    category: "SHOES",
    gender: "UNISEX",
    price: 160,
    isOnSale: false,
    image:
      "https://i.pinimg.com/736x/f5/13/80/f51380fbcebd99742ede7a5f1ab77194.jpg",
    label: "NEW",
  },
  {
    name: "LEATHER ANKLE BOOTS",
    category: "SHOES",
    gender: "WOMEN",
    price: 220,
    isOnSale: true,
    image:
      "https://i.pinimg.com/1200x/2a/4d/5b/2a4d5b34d41a5d3dd87a8a8e4421e309.jpg",
    label: "",
  },
  {
    name: "PLATFORM BOOTS",
    category: "SHOES",
    gender: "WOMEN",
    price: 245,
    isOnSale: false,
    image:
      "https://i.pinimg.com/736x/9a/7c/e6/9a7ce6da978d6e0f68b0f6be8c7298ac.jpg",
    label: "NEW",
  },
  {
    name: "MINIMAL LOAFERS",
    category: "SHOES",
    gender: "MEN",
    price: 190,
    isOnSale: false,
    image:
      "https://i.pinimg.com/1200x/0e/cc/bc/0eccbc21a02eef80be224dcbdaa9c3cc.jpg",
    label: "CORE PIECE",
  },
  {
    name: "SLIP-ON SNEAKERS",
    category: "SHOES",
    gender: "MEN",
    price: 125,
    isOnSale: true,
    image:
      "https://i.pinimg.com/1200x/07/2c/15/072c15e3925ffdbf3df6e189c72ad8cb.jpg",
    label: "",
  },
  {
    name: "STRUCTURED DERBY SHOES",
    category: "SHOES",
    gender: "WOMEN",
    price: 210,
    isOnSale: true,
    image:
      "https://i.pinimg.com/736x/32/91/c9/3291c91050c349ca1c830c9a280a97f1.jpg",
    label: "",
  },

  {
    name: "LEATHER SHOULDER BAG",
    category: "ACCESSORIES",
    gender: "WOMEN",
    price: 160,
    isOnSale: false,
    image:
      "https://i.pinimg.com/736x/bb/e6/3e/bbe63e981cddeb08f3723cf9680e1aec.jpg",
    label: "NEW",
  },
  {
    name: "MINIMALIST BELT",
    category: "ACCESSORIES",
    gender: "UNISEX",
    price: 55,
    isOnSale: false,
    image:
      "https://i.pinimg.com/736x/88/e6/35/88e635b827e0d90adc7b77230c38e9ee.jpg",
    label: "",
  },
  {
    name: "STRUCTURED CAP",
    category: "ACCESSORIES",
    gender: "UNISEX",
    price: 45,
    isOnSale: true,
    image:
      "https://i.pinimg.com/1200x/a7/a9/c1/a7a9c11582ca8e05e3b17a4d76093bb8.jpg",
    label: "SALE",
  },
  {
    name: "LEATHER WALLET",
    category: "ACCESSORIES",
    gender: "MEN",
    price: 75,
    isOnSale: false,
    image:
      "https://i.pinimg.com/736x/3a/37/29/3a37297f81130ca2964da1eb5477e4aa.jpg",
    label: "NEW",
  },
];
