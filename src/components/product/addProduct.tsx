import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Product } from "./types"; 
import { v4 as uuidv4 } from "uuid";

const AddProduct = () => {
  const [product, setProduct] = useState<Omit<Product, "id">>({
    image: "",
    brand: "",
    price: 0,
    description: "",
  });

  const navigate = useNavigate();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setProduct((prev) => ({
      ...prev,
      [name]: name === "price" ? Number(value) : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newProduct: Product = {
      ...product,
      id: uuidv4(),
    };

    const storedProducts = localStorage.getItem("products");
    const products: Product[] = storedProducts ? JSON.parse(storedProducts) : [];

    const updatedProducts = [...products, newProduct];
    localStorage.setItem("products", JSON.stringify(updatedProducts));
    navigate("/productList");
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-md mt-10">
      <h1 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white text-center">
        اضافه کردن محصول جدید
      </h1>
      <form onSubmit={handleSubmit} className="space-y-5">
        <input
          type="text"
          name="image"
          placeholder="آدرس عکس"
          value={product.image}
          onChange={handleChange}
          className="w-full p-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500"
          required
        />
        <input
          type="text"
          name="brand"
          placeholder="برند"
          value={product.brand}
          onChange={handleChange}
          className="w-full p-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500"
          required
        />
        <input
          type="number"
          name="price"
          placeholder="قیمت"
          value={product.price}
          onChange={handleChange}
          className="w-full p-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500"
          required
        />
        <textarea
          name="description"
          placeholder="توضیحات"
          value={product.description}
          onChange={handleChange}
          className="w-full p-3 h-32 rounded-xl border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 resize-none"
        />
        <div className="flex justify-between items-center pt-2">
          <button
            type="submit"
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-xl transition duration-200"
          >
            سیو محصول
          </button>
          <button
            type="button"
            onClick={() => navigate("/productList")}
            className="text-gray-500 dark:text-gray-400 hover:underline"
          >
            کنسل
          </button>
        </div>
      </form>
    </div>
  );
  
};

export default AddProduct;
