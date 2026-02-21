import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LanguageSelector from "./pages/LanguageSelector";
import LandingPage from "./pages/LandingPage";
import EmGuardePurchase from "./pages/EmGuardePurchase";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LanguageSelector />} />
          <Route path="/global" element={<LandingPage lang="en" />} />
          <Route path="/latam" element={<LandingPage lang="es" />} />
          <Route path="/global/emguarde" element={<EmGuardePurchase lang="en" />} />
          <Route path="/latam/emguarde" element={<EmGuardePurchase lang="es" />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
