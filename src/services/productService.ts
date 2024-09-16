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
          "https://images.esellerpro.com/2660/I/328/155/E203NA-FD026TS_2._1..jpg",
        price: 15000,
        stock: 10,
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
