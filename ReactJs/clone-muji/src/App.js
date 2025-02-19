import "./App.css";
import TopHeader from "./components/header/TopHeader";
import MenuHeader from "./components/header/MenuHeader";
import { useEffect, useState } from "react";
import HeroBanner from "./components/banner/HeroBanner";
import ProductList from "./components/product/ProductList";
import SmallBanner from "./components/banner/SmallBanner";
import ExploreBanner from "./components/banner/ExploreBanner";
import { Route, Routes, useLocation } from "react-router-dom";
import CategoryPage from "./components/category/CategoryPage";
import DetailProductPage from "./components/product/DetailProductPage";
import Footer from "./components/footer/Footer";
import CartPage from "./components/cart/CartPage";
import LoginPage from "./components/Authentication/LoginPage";
import RegisterPage from "./components/Authentication/RegisterPage";
import ForgotPasswordPage from "./components/Authentication/ForgotPasswordPage";
import AdminLayout from "./components/layouts/AdminLayout";
import DashBoardHome from "./components/admin/contents/DashBoardHome";
import ProductManagement from "./components/admin/contents/ProductManagement";
import OrderManagement from "./components/admin/contents/OrderManagement";
import CategoryManagement from "./components/admin/contents/CategoryManagement";
import useCRUD from "./Hooks/useCRUD";
import AuthContext from "./components/context/AuthContext";
import AuthProvider from "./components/context/AuthContext";
import UserInformation from "./components/user/UserInformation";

function App() {
  const [hideTopHeader, setHideTopHeader] = useState(false);
  const location = useLocation(); // Lấy thông tin đường dẫn hiện tại
  const { data: MenuCate, fetchData } = useCRUD("categories");

  useEffect(() => {
    try {
      fetchData();
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setHideTopHeader(true);
      } else {
        setHideTopHeader(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Kiểm tra xem URL hiện tại có bắt đầu bằng `/admin` không
  const isAdminRoute = location.pathname.startsWith("/admin");

  return (
    <AuthProvider>
      <div className="App flex flex-col">
        {!isAdminRoute && (
          <header className="flex flex-col ">
            <div
              className={`transition-all duration-500 ${
                hideTopHeader
                  ? "opacity-0 -translate-y-full"
                  : "opacity-100 translate-y-0"
              }`}
            >
              <TopHeader />
            </div>

            <MenuHeader isSticky={hideTopHeader} MenuCate={MenuCate} />
          </header>
        )}

        <main className="w-full flex flex-col flex-grow">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <HeroBanner />
                  <ProductList
                    listTitle={"Sản phẩm nổi bật"}
                    isPurchasable={false}
                    isNew={false}
                  />
                  <ProductList
                    listTitle={"Sản phẩm mới về"}
                    isPurchasable={true}
                    isNew={true}
                    rows={2}
                  />
                  <ProductList
                    listTitle={"Sản phẩm bán chạy"}
                    isPurchasable={true}
                    rows={2}
                    isNew={false}
                  />
                  <ExploreBanner />
                  <ProductList
                    listTitle={"Quần áo"}
                    isPurchasable={false}
                    rows={1}
                    isNew={false}
                  />
                  <SmallBanner />
                </>
              }
            />

            <Route path="/category/:categoryId" element={<CategoryPage />} />
            <Route
              path="/category/:categoryId/:subcategoryId"
              element={<CategoryPage />}
            />

            <Route path="/product/:productId" element={<DetailProductPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/forgot-password" element={<ForgotPasswordPage />} />

            {/* Routes dành cho Admin */}
            <Route path="/admin" element={<AdminLayout />}>
              <Route index element={<DashBoardHome />} />
              <Route path="products" element={<ProductManagement />} />
              <Route path="orders" element={<OrderManagement />} />
              <Route path="categories" element={<CategoryManagement />} />
            </Route>

            <Route path="/account" element={<UserInformation />} />
          </Routes>
        </main>

        {!isAdminRoute && (
          <footer className="w-full bg-[#f5f5f5] mt-5 h-[40vh]">
            <Footer />
          </footer>
        )}
      </div>
    </AuthProvider>
  );
}

export default App;
