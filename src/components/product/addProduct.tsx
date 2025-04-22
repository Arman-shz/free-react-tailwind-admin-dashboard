import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Product } from "./types";
import { v4 as uuidv4 } from "uuid";
import { Plus } from "lucide-react";

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
    <div className="max-w-2xl mx-auto p-6 bg-gradient-to-r from-white via-gray-50 to-gray-100 dark:from-gray-800 dark:via-gray-700 dark:to-gray-600 rounded-3xl shadow-lg mt-10">
      <h1 className="text-4xl font-extrabold text-gray-800 dark:text-white text-center mb-6">
        اضافه کردن محصول جدید
      </h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        
        {/* Input for image */}
        <input
          type="text"
          name="image"
          placeholder="آدرس عکس"
          value={product.image}
          onChange={handleChange}
          className="w-full p-4 rounded-2xl border border-gray-300 dark:border-gray-700 bg-white/70 dark:bg-gray-900 text-gray-800 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-lg dark:focus:ring-blue-600"
          required
        />

        {/* Input for brand */}
        <input
          type="text"
          name="brand"
          placeholder="برند"
          value={product.brand}
          onChange={handleChange}
          className="w-full p-4 rounded-2xl border border-gray-300 dark:border-gray-700 bg-white/70 dark:bg-gray-900 text-gray-800 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-lg dark:focus:ring-blue-600"
          required
        />

        {/* Input for price */}
        <input
          type="number"
          name="price"
          placeholder="قیمت"
          value={product.price}
          onChange={handleChange}
          className="w-full p-4 rounded-2xl border border-gray-300 dark:border-gray-700 bg-white/70 dark:bg-gray-900 text-gray-800 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-lg dark:focus:ring-blue-600"
          required
        />

        {/* Textarea for description */}
        <textarea
          name="description"
          placeholder="توضیحات"
          value={product.description}
          onChange={handleChange}
          className="w-full p-4 h-32 rounded-2xl border border-gray-300 dark:border-gray-700 bg-white/70 dark:bg-gray-900 text-gray-800 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-lg dark:focus:ring-blue-600 resize-none"
        />

        <div className="flex justify-between items-center pt-4">
          <button
            type="submit"
            className="flex items-center gap-2 bg-gradient-to-r from-green-400 to-emerald-500 text-white px-6 py-3 rounded-full shadow-md hover:bg-green-600 transition-all"
          >
            <Plus size={18} /> سیو محصول
          </button>
          <button
            type="button"
            onClick={() => navigate("/productList")}
            className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white font-semibold transition-all"
          >
            کنسل
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
