import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Product } from "../../components/product/types";

const ProductPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedProducts = localStorage.getItem("products");
    if (storedProducts) {
      setProducts(JSON.parse(storedProducts));
    } else {
      const defaultProducts: Product[] = [
        {
          id: "1",
          image: "https://onlysportplus.com/wp-content/uploads/2020/07/%D8%B1%D8%A7%DA%A9%D8%AA-%D8%A8%D8%AF%D9%85%DB%8C%D9%86%D8%AA%D9%88%D9%86-%DB%8C%D9%88%D9%86%DA%A9%D8%B3-%D9%85%D8%AF%D9%84-yonex-muscle-power-5.jpg",
          brand: "یونکس",
          price: 100,
          description: "راکت با کیفیت بالا",
        },
        {
          id: "2",
          image: "https://media.lozi.shop/product/5cb50ba2-88c2-4632-b6f9-960a2d7ae8e6_website.webp",
          brand: "لینینگ",
          price: 120,
          description: "دیزاین سبک وزن",
        },
        {
          id: "3",
          image: "https://media.lozi.shop/product/69e6c434-e21f-4ef9-a3b9-30d807167d11_website.webp",
          brand: "ویکتور",
          price: 90,
          description: "راکت قدرتی و منعطف",
        },
        {
          id: "4",
          image: "https://onlysportplus.com/wp-content/uploads/2020/08/1189661202.jpg",
          brand: "ویش",
          price: 110,
          description: "عالی برای تازه کار ها",
        },
        {
          id: "5",
          image: "https://media.lozi.shop/product/9c92402a-39c4-48bd-b5c6-7007a244de86.jpg",
          brand: "کاوازاکی",
          price: 95,
          description: "سبک و راحت برای استفاده",
        },
        {
          id: "6",
          image: "https://tennisfa.com/shop/wp-content/uploads/2023/08/yonexsonicage3wideblueblack.jpg",
          brand: "یونکس",
          price: 130,
          description: "حرفه ای با نمره بالا",
        },
      ];
      localStorage.setItem("products", JSON.stringify(defaultProducts));
      setProducts(defaultProducts);
    }
  }, []);

  const handleDelete = (id: string) => {
    const confirmed = window.confirm("آیا اطمینان دارید که می خواهید این محصول را حذف کنید؟");
    if (!confirmed) return;

    const updatedProducts = products.filter((product) => product.id !== id);
    setProducts(updatedProducts);
    localStorage.setItem("products", JSON.stringify(updatedProducts));
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold mr-[90px]">محصولات</h1>
        <button
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 ml-[35px]"
          onClick={() => navigate("/productList/add")}
        >
          محصول جدید
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mr-[90px]">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-lg rounded-xl p-4 flex flex-col items-center w-100"
          >
            <img
              src={product.image}
              alt={product.brand}
              className="w-54 h-42 object-cover rounded-lg mb-4"
            />
            <h2 className="text-lg font-semibold">{product.brand}</h2>
            <p className="text-gray-600">تومان{product.price}</p>
            <div className="mt-4 flex flex-wrap gap-2 justify-center">
              <button
                className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                onClick={() => navigate(`/productList/edit/${product.id}`)}
              >
                ویرایش
              </button>
              <button
                className="bg-gray-500 text-white px-3 py-1 rounded hover:bg-gray-600"
                onClick={() => navigate(`/productList/details/${product.id}`)}
              >
                جزییات
              </button>
              <button
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-700"
                onClick={() => handleDelete(product.id)}
              >
              حذف
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
