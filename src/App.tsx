import "./App.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import HeroSection from "./Components/HeroSection";
import SideBar from "./Components/SideBar";

const App: React.FC = () => {
  return (
    <>
      <Header />
      <hr style={{ opacity: 0.2 }} />
      <div style={{ display: "flex" }}>
        <div style={{ flex: 1 }}>
          <HeroSection />
        </div>
        <div style={{ width: "350px" }}>
          <SideBar />
        </div>
      </div>
      <Footer />
    </>
  );
}
export default App;
