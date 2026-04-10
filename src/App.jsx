import Navbar from "./components/1_Navbar";
import Banner from "./components/2_Banner";
import Stats from "./components/3_Stats";
import Premium from "./components/4_Premium";
import "./App.css";

function App() {
  return (
    <>
      <div className="flex flex-col items-center gap-15 pb-15">
        <Navbar></Navbar>
        <Banner></Banner>
        <Stats></Stats>
        <Premium></Premium>
      </div>
    </>
  );
}

export default App;
