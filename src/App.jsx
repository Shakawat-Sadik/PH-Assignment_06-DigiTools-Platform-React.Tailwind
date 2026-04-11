import { useState } from "react";
import Navbar from "./components/1_Navbar";
import Banner from "./components/2_Banner";
import Stats from "./components/3_Stats";
import Premium from "./components/4_Premium";
import { ToastContainer } from "react-toastify";
import "./App.css";

function App() {

  const [inCarted, setInCarted] = useState([]);
  return (
    <>
      <div className="flex flex-col items-center gap-15 pb-15">
        <Navbar inCarted={inCarted}></Navbar>
        <Banner></Banner>
        <Stats></Stats>
        <Premium inCarted={inCarted} setInCarted={setInCarted}></Premium>
      </div>
      <ToastContainer position="bottom-right" />
    </>
  );
}

export default App;
