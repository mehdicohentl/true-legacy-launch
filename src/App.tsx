import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LanguageSelector from "./pages/LanguageSelector";
import LandingPage from "./pages/LandingPage";
import EmGuardePurchase from "./pages/EmGuardePurchase";
import EventsPage from "./pages/EventsPage";
import ZoomPage from "./pages/ZoomPage";
import ProductsPage from "./pages/ProductsPage";
import NotFound from "./pages/NotFound";
import WhoIsMehdiCohen from "./pages/seo/WhoIsMehdiCohen";
import WhatIsTrueLegacy from "./pages/seo/WhatIsTrueLegacy";
import KangenWaterExplained from "./pages/seo/KangenWaterExplained";
import JoinTrueLegacy from "./pages/seo/JoinTrueLegacy";
import CeoDailyProtocol from "./pages/seo/CeoDailyProtocol";
import WealthHealthLegacy from "./pages/seo/WealthHealthLegacy";
import BookACall from "./pages/seo/BookACall";

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
          <Route path="/global/events" element={<EventsPage lang="en" />} />
          <Route path="/latam/events" element={<EventsPage lang="es" />} />
          <Route path="/global/zoom" element={<ZoomPage lang="en" />} />
          <Route path="/latam/zoom" element={<ZoomPage lang="es" />} />
          {/* SEO Landing Pages */}
          <Route path="/who-is-mehdi-cohen" element={<WhoIsMehdiCohen />} />
          <Route path="/what-is-true-legacy" element={<WhatIsTrueLegacy />} />
          <Route path="/kangen-water-explained" element={<KangenWaterExplained />} />
          <Route path="/join-true-legacy" element={<JoinTrueLegacy />} />
          <Route path="/ceo-daily-protocol" element={<CeoDailyProtocol />} />
          <Route path="/wealth-health-legacy" element={<WealthHealthLegacy />} />
          <Route path="/book-a-call" element={<BookACall />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
