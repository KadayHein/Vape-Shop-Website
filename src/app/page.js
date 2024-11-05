import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "@/components/Navbar";
import BestDeal from "@/components/BestDeal";
import NewRelease from "@/components/NewRelease";
import Header from "@/components/Header";
import Membership from "@/components/Membership";
import MoreSlider from "@/components/MoreSlider";
import Footer from "@/components/Footer";
import TryNew from "@/components/TryNew";

export default function Home() {
  return (
    <>
      <Navbar/>
      <Header/>
      <BestDeal/>
      <Membership/>
      <NewRelease/>
      <TryNew/>
      <MoreSlider/>
      <Footer/>
    </>
  );
}
