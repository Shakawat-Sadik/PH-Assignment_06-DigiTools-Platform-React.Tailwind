import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "./App.css";
import Navbar from "./components/1_Navbar";
import Banner from "./components/2_Banner";
import Stats from "./components/3_Stats";
import Premium from "./components/4_Premium";
import Steps from "./components/5_Steps";
import Pricing from "./components/6_Pricing";
import Featured from "./components/7_Featured";
import Footer from "./components/8_Footer";

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
      <section className="flex flex-col items-center gap-15 pb-15">
        <Navbar total={total} inCarted={inCarted} setCurrentTab={setCurrentTab}></Navbar>
        <Banner></Banner>
        <Stats></Stats>
        <Premium
          id="premium-section"
          total={total}
          checkout={checkout}
          currentTab={currentTab}
          setCurrentTab={setCurrentTab}
          inCarted={inCarted}
          setInCarted={setInCarted}
        ></Premium>
        <Steps></Steps>
        <Pricing></Pricing>
      </section>
      <Featured></Featured>
      <Footer></Footer>
      <ToastContainer position="bottom-right" />
    </>
  );
}

export default App;
