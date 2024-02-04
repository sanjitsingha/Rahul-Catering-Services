import MidSec from "./components/midsec";
import Home from "./components/Home/Home";
import CalculateSection from "./components/calculate";
import Contact from "./components/contact/contact";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Feedback from "./components/Feedbacks/Feedback";
import OurTeam from "./components/OurTeam/OurTeam";

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="max-w-[1380px]  m-auto ">
      <Home />
      <MidSec />
      <OurTeam />
      <CalculateSection />
      <Feedback />
      <Contact />
    </div>
  );
}

export default App;
