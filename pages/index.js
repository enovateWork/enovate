import Head from "next/head";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import Header from "../sections/Header";
import Hero from "../sections/Hero";
import Video from "../sections/Video";
import Expertise from "../sections/expertise";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.ico" />
      </Head>
      <main>
        {/* Header-section */}
        <Header />
        {/* Hero-section */}
        <div className={styles["page-content"]}>
          <Hero />
          <Video />
          <Expertise />
        </div>
      </main>
    </>
  );
}
