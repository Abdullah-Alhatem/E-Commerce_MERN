import productModel from "../models/productModel";

export const getAllProducts = async () => {
  return await productModel.find();
};

export const seedInitialProducts = async () => {
  try {
    const products = [
      {
        title: "Dell laptop",
        image:
          "https://th.bing.com/th/id/R.1429d80f6e5f62fadfc6646e43689e5f?rik=ojmUoMmlb32Tog&riu=http%3a%2f%2fwww.informationq.com%2fwp-content%2fuploads%2f2013%2f11%2fDell-Inspiron-15-3521-15.6-inch-Laptop-Black01.jpg&ehk=pSUmBqiCYQyti2AeZ0mRSr1R6M41QW7qxUuorQ3kEbs%3d&risl=&pid=ImgRaw&r=0",
        price: 15000,
        stock: 10,
      },
      {
        title: "Asus laptop",
        image:
          "https://th.bing.com/th/id/R.07e8130e38146d0a50646a68b691d4eb?rik=QDxJ2cQfafDM4g&pid=ImgRaw&r=0",
        price: 18000,
        stock: 7,
      },
      {
        title: "HP laptop",
        image:
          "https://www.hp.com/ca-en/shop/html/Merch/Images/c05971638_1750x1285.jpg",
        price: 11000,
        stock: 18,
      },
    ];
    const existingProducts = await getAllProducts();
    if (existingProducts.length === 0) {
      await productModel.insertMany(products);
    }
  } catch (err) {
    console.error("connot see database", err);
  }
};
