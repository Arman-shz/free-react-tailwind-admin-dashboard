import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Product } from "../../components/product/types";
import { Plus } from "lucide-react";

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
    <div className="min-h-screen dark:bg-gradient-to-br from-[#1e1e2f] via-[#2d2d44] to-[#3f3f5a] px-6 py-10">
     <div className="flex justify-between items-center mb-10 max-w-7xl mx-auto">
     <h1 className="text-4xl font-vazirmatn text-gray-500">لیست محصولات</h1>
    
     <button
      className="flex items-center gap-2 bg-gradient-to-br from-[#00A8E8] via-[#007EA7] to-[#003459]
      text-white px-5 py-2 rounded-xl shadow-lg hover:brightness-120 transition-all font-vazirmatn"
      onClick={() => navigate("/productList/add")}
     >
      <Plus size={18} />
      محصول جدید
     </button>
    </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {products.map((product) => (
        
<div
  key={product.id}
  className="bg-white rounded-3xl shadow-lg overflow-hidden relative transition-transform hover:scale-105"
>
  <div className="relative h-32 bg-cyan-500">
    <div className="absolute bottom-0 left-0 w-full h-8 bg-white rotate-[4deg] origin-top-left z-10"></div>

    <div className="absolute top-3 right-3 z-20 bg-white rounded-full px-4 py-2 text-cyan-600 font-vazirmatn text-lg shadow-md">
      {product.price.toLocaleString()} تومان
    </div>

    <div className="absolute top-3 left-3 z-20 text-white">
      <h3 className="font-vazirmatn text-lg">{product.brand}</h3>
      <p className="text-sm font-vazirmatn">{product.description}</p>
    </div>
  </div>

  <div className="relative z-10 -mt-10 flex justify-center">
    <div className="w-40 h-40 rounded-full border-4 border-white overflow-hidden shadow-md bg-white">
      <img
        src={product.image}
        alt={product.brand}
        className="w-full h-full object-cover"
      />
    </div>
  </div>

  <div className="px-6 pt-6 pb-4 flex flex-col items-center gap-3">
    <button
      onClick={() => navigate(`/productList/details/${product.id}`)}
      className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-sm font-vazirmatn py-2 px-6 rounded-full shadow hover:brightness-110"
    >
      مشاهده جزئیات
    </button>
    <div className="flex gap-3">
      <button
        onClick={() => navigate(`/productList/edit/${product.id}`)}
        className="text-sm font-vazirmatn text-cyan-600 border border-cyan-500 rounded-full px-4 py-1 hover:bg-cyan-100"
      >
        ویرایش
      </button>
      <button
        onClick={() => handleDelete(product.id)}
        className="text-sm font-vazirmatn text-red-600 border border-red-500 rounded-full px-4 py-1 hover:bg-red-100"
      >
        حذف
      </button>
    </div>
  </div>
</div>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
