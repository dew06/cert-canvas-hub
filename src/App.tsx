import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CampusADashboard from "./pages/CampusADashboard";
import LocalCampusDashboard from "./pages/LocalCampusDashboard";
import VerificationPage from "./pages/VerificationPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/campus-a" element={<CampusADashboard />} />
          <Route path="/campus-b" element={<LocalCampusDashboard />} />
          <Route path="/campus-c" element={<LocalCampusDashboard />} />
          <Route path="/campus-d" element={<LocalCampusDashboard />} />
          <Route path="/campus-e" element={<LocalCampusDashboard />} />
          <Route path="/verify" element={<VerificationPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
