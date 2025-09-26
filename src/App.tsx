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

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
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
          </Route>

          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<AdminDashboard />} />
            <Route path="submissions" element={<AdminSubmissions />} />
            <Route path="branches" element={<AdminBranches />} />
            <Route path="menus" element={<AdminMenus />} />
          </Route>

          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;