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
    return <p className="text-center mt-10">محصول یافت نشد...</p>;
  }

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-md mt-10">
      <h1 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white text-center">
        جزئیات محصول
      </h1>
  
      <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl shadow-sm">
        <img
          src={product.image}
          alt={product.brand}
          className="w-50 h-50 object-cover rounded-[50%]  mb-6 mr-[180px]"
        />
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
          برند: {product.brand}
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-2">
          قیمت: {product.price.toLocaleString()} تومان
        </p>
        <p className="text-gray-600 dark:text-gray-400">
          {product.description}
        </p>
      </div>
  
      <button
        onClick={() => navigate("/productList")}
        className="mt-6 text-blue-600 dark:text-blue-400 hover:underline text-sm"
      >
        ← برگشت به محصولات
      </button>
    </div>
  );
  
};

export default ProductDetails;
