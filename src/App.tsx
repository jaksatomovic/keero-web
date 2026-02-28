import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { HowItWorks } from "./components/HowItWorks";
import { Modules } from "./components/Modules";
import { CTA } from "./components/CTA";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Hero />
      <Features />
      <HowItWorks />
      <Modules />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
