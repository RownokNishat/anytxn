import Stats from "./component/Counter";
import FlowChart from "./component/FlowChart";
import Header from "./component/Header";
import HeroSection from "./component/Herosection";
import LegacySection from "./component/LegacySection";
import AIBlockchainDiagram from "./component/NewFlow";
import HomePhilosophies from "./component/Philosophy";
import PowerTheFuture from "./component/PowerTheFuture";
import SectionEnd from "./component/SectionEnd";
import SwiperComponent from "./component/SwiperCarousel";
import TrustedBy from "./component/TrustedCompanies";

export default function Home() {
  return (
    <div>
      <div style={{ clipPath: "polygon(0 0%, 100% 0, 100% 85%, 0% 100%)" }}>
        <Header />
        <HeroSection />
      </div>
      <PowerTheFuture />
      <SectionEnd />
      <HomePhilosophies />
      <SwiperComponent />
      <SectionEnd />
      <Stats />
      <TrustedBy />
      <LegacySection />
      {/* <AIBlockchainDiagram />
      <FlowChart /> */}
    </div>
  );
}
