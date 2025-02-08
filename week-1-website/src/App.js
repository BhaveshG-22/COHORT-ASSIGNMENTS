import "./App.css";
import CodeAnywhere from "./components/codeAnywhere";
import CodeSuggestions from "./components/codeSuggestions";
import Customization from "./components/customization";
import ExtensionsSection from "./components/extensionsSection";
import FeaturesSection from "./components/featuresSection";
import Footer from "./components/footer";
import HeroSection from "./components/heroSection";
import LanguageSupport from "./components/languageSupport";
import MultiFileEdits from "./components/multiFileEdits";
import Navbar from "./components/navbar";
import RichFeatures from "./components/richFeatures";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <MultiFileEdits />
      <CodeSuggestions />
      <ExtensionsSection />
      <LanguageSupport />
      <Customization />
      <CodeAnywhere />
      <RichFeatures /> 
      <Footer />
    </div>
  );
}

export default App;
