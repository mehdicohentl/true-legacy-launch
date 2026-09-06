import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import LanguageSelector from "./pages/LanguageSelector";
import LandingPage from "./pages/LandingPage";
import EmGuardePurchase from "./pages/EmGuardePurchase";
import EventsPage from "./pages/EventsPage";
import ZoomPage from "./pages/ZoomPage";
import ProductsPage from "./pages/ProductsPage";
import ResourcesPage from "./pages/ResourcesPage";
import NotFound from "./pages/NotFound";
import KangenWaterSubpage from "./pages/KangenWaterSubpage";
import KangenGuidePage from "./pages/KangenGuidePage";
import KangenLeadsAdmin from "./pages/KangenLeadsAdmin";
import EmguardeGuidePage from "./pages/EmguardeGuidePage";
import EmguardeLeadsAdmin from "./pages/EmguardeLeadsAdmin";
import EventRegistrationsAdmin from "./pages/EventRegistrationsAdmin";
import TeamApplicationPage from "./pages/TeamApplicationPage";
import TeamApplicationsAdmin from "./pages/TeamApplicationsAdmin";
import EmailActivityAdmin from "./pages/EmailActivityAdmin";
import UnsubscribePage from "./pages/UnsubscribePage";
import EmGuardeGoSubpage from "./pages/EmGuardeGoSubpage";
import WhoIsMehdiCohen from "./pages/seo/WhoIsMehdiCohen";
import WhatIsTrueLegacy from "./pages/seo/WhatIsTrueLegacy";
import KangenWaterExplained from "./pages/seo/KangenWaterExplained";
import JoinTrueLegacy from "./pages/seo/JoinTrueLegacy";
import CeoDailyProtocol from "./pages/seo/CeoDailyProtocol";
import WealthHealthLegacy from "./pages/seo/WealthHealthLegacy";
import BookACall from "./pages/seo/BookACall";
import DuoPackagePage from "./pages/DuoPackagePage";
import WhatsAppWidget from "@/components/WhatsAppWidget";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<LanguageSelector />} />
          <Route path="/global" element={<LandingPage lang="en" />} />
          <Route path="/latam" element={<LandingPage lang="es" />} />
          <Route path="/global/emguarde" element={<EmGuardePurchase lang="en" />} />
          <Route path="/latam/emguarde" element={<EmGuardePurchase lang="es" />} />
          <Route path="/global/kangen-water" element={<KangenWaterSubpage lang="en" />} />
          <Route path="/latam/kangen-water" element={<KangenWaterSubpage lang="es" />} />
          <Route path="/global/kangen-guide" element={<KangenGuidePage lang="en" />} />
          <Route path="/latam/guia-kangen" element={<KangenGuidePage lang="es" />} />
          <Route path="/admin/kangen-leads" element={<KangenLeadsAdmin />} />
          <Route path="/crm" element={<Navigate to="/admin/kangen-leads" replace />} />
          <Route path="/global/emguarde-guide" element={<EmguardeGuidePage lang="en" />} />
          <Route path="/latam/guia-emguarde" element={<EmguardeGuidePage lang="es" />} />
          <Route path="/admin/emguarde-leads" element={<EmguardeLeadsAdmin />} />
          <Route path="/admin/event-registrations" element={<EventRegistrationsAdmin />} />
          <Route path="/admin/team-applications" element={<TeamApplicationsAdmin />} />
          <Route path="/admin/email-activity" element={<EmailActivityAdmin />} />
          <Route path="/unsubscribe" element={<UnsubscribePage />} />
          <Route path="/global/join" element={<TeamApplicationPage lang="en" />} />
          <Route path="/latam/unete" element={<TeamApplicationPage lang="es" />} />
          <Route path="/global/emguarde-go" element={<EmGuardeGoSubpage lang="en" />} />
          <Route path="/latam/emguarde-go" element={<EmGuardeGoSubpage lang="es" />} />
          <Route path="/global/events" element={<EventsPage lang="en" />} />
          <Route path="/latam/events" element={<EventsPage lang="es" />} />
          <Route path="/global/products" element={<ProductsPage lang="en" />} />
          <Route path="/latam/products" element={<ProductsPage lang="es" />} />
          <Route path="/global/resources" element={<ResourcesPage lang="en" />} />
          <Route path="/latam/resources" element={<ResourcesPage lang="es" />} />
          <Route path="/global/zoom" element={<ZoomPage lang="en" />} />
          <Route path="/latam/zoom" element={<ZoomPage lang="es" />} />
          <Route path="/global/duopackage" element={<DuoPackagePage lang="en" />} />
          <Route path="/latam/latam-duo-package" element={<DuoPackagePage lang="es" />} />
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
        <WhatsAppWidget />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
