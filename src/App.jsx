import { useState } from "react";
import Navbar from "./components/1_Navbar";
import Banner from "./components/2_Banner";
import Stats from "./components/3_Stats";
import Premium from "./components/4_Premium";
import { ToastContainer, toast } from "react-toastify";
import "./App.css";

function App() {
  const [currentTab, setCurrentTab] = useState(1);
  const [inCarted, setInCarted] = useState([]);

  const total = inCarted.reduce((total, current) => total + current.price, 0);
  const checkout = () => {
    setInCarted([]);
    return toast.success(`Purchase Complete! total paid $${total}`);
  };

  return (
    <>
      <div className="flex flex-col items-center gap-15 pb-15">
        <Navbar total={total} inCarted={inCarted}></Navbar>
        <Banner></Banner>
        <Stats></Stats>
        <Premium total={total} checkout={checkout} currentTab={currentTab} setCurrentTab={setCurrentTab} inCarted={inCarted} setInCarted={setInCarted}></Premium>
      </div>
      <ToastContainer position="bottom-right" />
    </>
  );
}

export default App;
