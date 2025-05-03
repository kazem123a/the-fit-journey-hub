
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Blog from "./pages/Blog";
import Programs from "./pages/Programs";
import Products from "./pages/Products";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import BlogArticle from "./pages/BlogArticle";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import BottomNav from "@/components/BottomNav";

const queryClient = new QueryClient();

// استخدام HashRouter بدلاً من BrowserRouter لتوافقية أفضل مع GitHub Pages
const App = () => (
  <QueryClientProvider client={queryClient}>
    <HashRouter>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogArticle />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <BottomNav />
      </TooltipProvider>
    </HashRouter>
  </QueryClientProvider>
);

export default App;
