import Head from "next/head";
import styles from "../styles/Home.module.css";
import Header from "../sections/Header";
import Hero from "../sections/Hero";
import Video from "../sections/Video";
import Expertise from "../sections/expertise";
import Projects from "../sections/Projects";
import BuildingProcess from "../sections/BuildingProcess";
import Faq from "../sections/Faq";
import Footer from "../sections/Footer";
import { useDispatch } from "react-redux";
import { dropDownAction } from "../redux/slice/dropDownSlice";

export default function Home({ projects }) {
  const dispatch = useDispatch();
  const closeDropDown = () => {
    dispatch(dropDownAction.toggle());
  };
  return (
    <>
      <Head>
        <title>Enovate | Creative design and development agency</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.ico" />
      </Head>
      <main>
        {/* Header-section */}
        <Header />
        {/* Hero-section */}
        <div onClick={closeDropDown} className={styles["page-content"]}>
          <Hero />
          <Video />
          <Expertise />
          <Projects />
          <BuildingProcess />
          <Faq />
          <Footer />
        </div>
      </main>
    </>
  );
}
