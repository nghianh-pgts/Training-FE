import logo from "./logo.svg";
import "./App.css";
import TopHeader from "./components/header/TopHeader";
import MenuHeader from "./components/header/MenuHeader";
import { useEffect, useState } from "react";
import HeroBanner from "./components/banner/HeroBanner";

function App() {
  const [hideTopHeader, setHideTopHeader] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setHideTopHeader(true);
      } else {
        setHideTopHeader(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="App">
      <header className="flex flex-col ">
        <div
          className={`transition-all duration-500 ${
            hideTopHeader
              ? "opacity-0 -translate-y-full"
              : "opacity-100 translate-y-0"
          }`}
        >
          <TopHeader />
        </div>

        <MenuHeader isSticky={hideTopHeader} />
      </header>
      <main className="h-[1999px]">
        <HeroBanner />
      </main>
      <footer></footer>
      <h1 className="text-emerald-300 font-semibold">Clone Muji</h1>
    </div>
  );
}

export default App;
