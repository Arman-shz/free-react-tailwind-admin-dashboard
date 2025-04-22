import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Product } from "../../components/product/types";
import { Pencil, Trash2, Info, Plus } from "lucide-react";

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
     <h1 className="text-4xl font-extrabold text-gray-500">لیست محصولات</h1>
    
     <button
      className="flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-5 py-2 rounded-xl shadow-lg hover:brightness-120 transition-all"
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
  className="group relative rounded-3xl bg-gradient-to-tr from-purple-500 via-pink-500 to-red-500 p-[2px] shadow-xl hover:shadow-2xl hover:scale-[1.03] transition-transform"
>
  <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-4 h-full flex flex-col justify-between">
    <div className="overflow-hidden rounded-2xl shadow-md">
      <img
        src={product.image}
        alt={product.brand}
        className="w-full h-48 object-cover rounded-xl group-hover:scale-105 transition-transform duration-500"
      />
    </div>
    <div className="mt-4 text-white text-center">
      <h2 className="text-2xl font-extrabold tracking-tight">{product.brand}</h2>
      <p className="text-sm text-white/80 mt-1">{product.description}</p>
    </div>
    <div className="mt-3 text-center">
      <span className="inline-block bg-white/20 px-4 py-1 text-lg rounded-full text-yellow-300 shadow-md">
        {product.price.toLocaleString()} تومان
      </span>
    </div>
    <div className="mt-5 flex justify-center gap-3 text-sm font-medium">
      <button
        onClick={() => navigate(`/productList/edit/${product.id}`)}
        className="flex items-center gap-1 px-4 py-2 rounded-full bg-white/20 hover:bg-white/30 text-white transition-all"
      >
        <Pencil size={16} /> ویرایش
      </button>
      <button
        onClick={() => navigate(`/productList/details/${product.id}`)}
        className="flex items-center gap-1 px-4 py-2 rounded-full bg-white/20 hover:bg-white/30 text-white transition-all"
      >
        <Info size={16} /> جزئیات
      </button>
      <button
        onClick={() => handleDelete(product.id)}
        className="flex items-center gap-1 px-4 py-2 rounded-full bg-red-500 hover:bg-red-700 text-white transition-all"
      >
        <Trash2 size={16} /> حذف
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
