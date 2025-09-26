import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import PledgeJewelry from "./pages/PledgeJewelry";
import SellJewelry from "./pages/SellJewelry";
import BranchLocator from "./pages/BranchLocator";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import Layout from "./components/Layout";
import AdminLayout from "./components/admin/AdminLayout";
import AdminDashboard from "./pages/admin/Dashboard";
import PriceEstimate from "./pages/PriceEstimate";
import AdminBranches from "./pages/admin/Branches";
import AdminSubmissions from "./pages/admin/Submissions";
import Shop from "./pages/Shop";
import AdminMenus from "./pages/admin/Menus";
import ShopLayout from "./components/ShopLayout";
import { CartProvider } from "./context/CartContext";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import OrderConfirmationPage from "./pages/OrderConfirmationPage";
import AdminProducts from "./pages/admin/Products";
import AdminCategories from "./pages/admin/Categories";
import AdminEstimations from "./pages/admin/Estimations";
import AdminUsers from "./pages/admin/Users";
import { AuthProvider } from "./context/AuthContext";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ProtectedRoute from "./components/ProtectedRoute";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <AuthProvider>
        <CartProvider>
          <BrowserRouter>
            <Routes>
              <Route element={<Layout />}>
                <Route path="/" element={<Index />} />
                <Route path="/pledge" element={<PledgeJewelry />} />
                <Route path="/sell" element={<SellJewelry />} />
                <Route path="/branches" element={<BranchLocator />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/estimate" element={<PriceEstimate />} />
              </Route>

              <Route element={<ShopLayout />}>
                <Route path="/shop" element={<Shop />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                
                <Route element={<ProtectedRoute />}>
                  <Route path="/checkout" element={<CheckoutPage />} />
                  <Route path="/order-confirmation" element={<OrderConfirmationPage />} />
                </Route>
              </Route>

              <Route path="/admin" element={<AdminLayout />}>
                <Route index element={<AdminDashboard />} />
                <Route path="submissions" element={<AdminSubmissions />} />
                <Route path="branches" element={<AdminBranches />} />
                <Route path="menus" element={<AdminMenus />} />
                <Route path="products" element={<AdminProducts />} />
                <Route path="categories" element={<AdminCategories />} />
                <Route path="estimations" element={<AdminEstimations />} />
                <Route path="users" element={<AdminUsers />} />
              </Route>

              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </CartProvider>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;