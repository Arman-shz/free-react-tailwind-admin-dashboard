import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Product } from "./types";

const ProductDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedProducts = localStorage.getItem("products");
    if (storedProducts) {
      const products: Product[] = JSON.parse(storedProducts);
      const foundProduct = products.find((p) => p.id === id);
      setProduct(foundProduct || null);
    }
  }, [id]);

  if (!product) {
    return <p className="text-center mt-10 text-xl font-semibold">محصول یافت نشد...</p>;
  }

  return (
    <div className="max-w-3xl mx-auto p-8 bg-gradient-to-br from-[#f1f1f1] via-[#e1e1e6] to-[#d1d1db] dark:from-[#2a2a3a] dark:via-[#353544] dark:to-[#4a4a60] rounded-3xl shadow-xl mt-10">
      <h1 className="text-4xl font-extrabold mb-6 text-gray-800 dark:text-white text-center">
        جزئیات محصول
      </h1>

      <div className="flex flex-col lg:flex-row bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg gap-8">
        <div className="w-full lg:w-1/3">
          <img
            src={product.image}
            alt={product.brand}
            className="w-full h-auto object-cover rounded-3xl shadow-xl hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="w-full lg:w-2/3 space-y-6">
          <h2 className="text-3xl font-semibold text-gray-800 dark:text-white">
            برند: {product.brand}
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            قیمت: <span className="font-bold">{product.price.toLocaleString()} تومان</span>
          </p>
          <p className="text-gray-600 dark:text-gray-400">{product.description}</p>
          <div className="mt-6">
            <button
              onClick={() => navigate("/productList")}
              className="w-full py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl shadow-lg transform transition-all hover:scale-105 hover:bg-gradient-to-r hover:from-indigo-700 hover:to-purple-700 duration-300"
            >
              ← برگشت به محصولات
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
