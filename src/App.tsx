import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { SiteLayout } from "./keero/SiteLayout";
import { HomePage } from "./pages/HomePage";
import { BuyPage } from "./pages/BuyPage";
import { AboutPage } from "./pages/AboutPage";
import { SupportPage } from "./pages/SupportPage";
import { PrivacyPage } from "./pages/PrivacyPage";
import { TermsPage } from "./pages/TermsPage";
import { RefundPage } from "./pages/RefundPage";
import { ExperiencePage } from "./pages/ExperiencePage";
import { FaqPage } from "./pages/FaqPage";
import { ShippingPage } from "./pages/ShippingPage";
import { BulkOrdersPage } from "./pages/BulkOrdersPage";
import { ComingSoonPage } from "./pages/ComingSoonPage";
import { siteFlags } from "./keero/siteFlags";

export default function App() {
  if (siteFlags.maintenanceMode) {
    return <ComingSoonPage />;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<SiteLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/buy" element={<BuyPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/support" element={<SupportPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/refund" element={<RefundPage />} />
          <Route path="/shipping" element={<ShippingPage />} />
          <Route path="/bulk" element={<BulkOrdersPage />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/experience" element={<ExperiencePage />} />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
