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
    <div className="max-w-4xl mx-auto mt-16 bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
      <div className="md:w-1/2 bg-gradient-to-br from-[#00A8E8] via-[#007EA7] to-[#003459] p-8 flex items-center justify-center">
        <img
          src={product.image}
          alt={product.brand}
          className="rounded-2xl shadow-xl w-full max-w-xs object-contain"
        />
      </div>

      <div className="md:w-1/2 p-10 bg-[#fdfdfd] text-right space-y-5">
        <div>
          <p className="text-sm text-gray-500 font-medium">محصول</p>
          <h2 className="text-3xl font-bold text-[#FF5722]">{product.brand}</h2>
        </div>

        <p className="text-gray-700 text-base leading-relaxed">{product.description}</p>

        <div className="text-sm">
          <p className="text-gray-500 font-semibold mb-1">قیمت</p>
          <p className="text-2xl text-red-500 font-bold">{product.price.toLocaleString()} تومان</p>
        </div>

        <div className="pt-2">
          <button
            onClick={() => navigate("/productList")}
            className="w-full py-3 bg-gradient-to-r from-[#00A8E8] to-[#007EA7] text-white font-semibold rounded-xl shadow-md hover:scale-[1.02] transition-transform"
          >
            ← برگشت به محصولات
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;