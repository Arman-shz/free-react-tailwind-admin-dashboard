import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Product } from "./types";

const EditProduct = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedProducts = localStorage.getItem("products");
    if (storedProducts) {
      const products: Product[] = JSON.parse(storedProducts);
      const foundProduct = products.find((p) => p.id === id);
      if (foundProduct) {
        setProduct(foundProduct);
      }
    }
  }, [id]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (!product) return;
    const { name, value } = e.target;
    setProduct({
      ...product,
      [name]: name === "price" ? Number(value) : value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!product) return;

    const storedProducts = localStorage.getItem("products");
    if (storedProducts) {
      const products: Product[] = JSON.parse(storedProducts);
      const updatedProducts = products.map((p) =>
        p.id === product.id ? product : p
      );
      localStorage.setItem("products", JSON.stringify(updatedProducts));
      navigate("/productList");
    }
  };

  if (!product) {
    return <p className="text-center mt-10">محصول یافت نشد...</p>;
  }

  return (
    <div className="max-w-2xl mx-auto p-6 bg-gradient-to-r from-white via-gray-50 to-gray-100 dark:from-gray-800 dark:via-gray-700 dark:to-gray-600 rounded-3xl shadow-lg mt-10">
      <h1 className="text-4xl font-vazirmatn text-gray-800 dark:text-white text-center mb-6">
        ویرایش محصول
      </h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        
        {/* Input for image */}
        <input
          type="text"
          name="image"
          placeholder="آدرس عکس"
          value={product.image}
          onChange={handleChange}
          className="w-full p-4 rounded-2xl border border-gray-300 dark:border-gray-700 bg-white/70 text-gray-800 dark:bg-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-lg dark:focus:ring-blue-600"
          required
        />

        {/* Input for brand */}
        <input
          type="text"
          name="brand"
          placeholder="برند"
          value={product.brand}
          onChange={handleChange}
          className="w-full p-4 rounded-2xl border border-gray-300 dark:border-gray-700 bg-white/70 text-gray-800 dark:bg-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-lg dark:focus:ring-blue-600"
          required
        />

        {/* Input for price */}
        <input
          type="number"
          name="price"
          placeholder="قیمت"
          value={product.price}
          onChange={handleChange}
          className="w-full p-4 rounded-2xl border border-gray-300 dark:border-gray-700 bg-white/70 text-gray-800 dark:bg-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-lg dark:focus:ring-blue-600"
          required
        />

        {/* Textarea for description */}
        <textarea
          name="description"
          placeholder="توضیحات"
          value={product.description}
          onChange={handleChange}
          className="w-full p-4 h-32 rounded-2xl border border-gray-300 dark:border-gray-700 bg-white/70 text-gray-800 dark:bg-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-lg dark:focus:ring-blue-600 resize-none"
        />

        <div className="flex justify-between items-center pt-4">
          <button
            type="submit"
            className="flex items-center gap-2 bg-gradient-to-r from-blue-400 to-indigo-600 text-white px-6 py-3 rounded-full shadow-md hover:bg-blue-700 transition-all"
          >
            سیو تغییرات
          </button>
          <button
            type="button"
            onClick={() => navigate("/productList")}
            className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white font-vazirmatn transition-all"
          >
            کنسل
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditProduct;
