
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ArticlePage from "./pages/ArticlePage";
import NotFound from "./pages/NotFound";
import { TooltipProvider } from "@/components/ui/tooltip";
import ThemesPage from "./pages/ThemesPage";

// Create a new QueryClient instance
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <TooltipProvider>
            <HomePage />
          </TooltipProvider>
        } />
        <Route path="/themes" element={
          <TooltipProvider>
            <ThemesPage />
          </TooltipProvider>
        } />
        <Route path="/article/:id" element={
          <TooltipProvider>
            <ArticlePage />
          </TooltipProvider>
        } />
        <Route path="*" element={
          <TooltipProvider>
            <NotFound />
          </TooltipProvider>
        } />
      </Routes>
      <Toaster />
      <Sonner />
    </BrowserRouter>
  </QueryClientProvider>
);

export default App;
