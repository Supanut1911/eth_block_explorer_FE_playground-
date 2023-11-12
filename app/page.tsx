import Header from "./components/header";
import Search from "./components/search";
import Styles from "./styles/Home.module.css";
import HeroSection from "./components/heroSection";
export default function Home() {
  return (
    <>
      <section className={Styles.main}>
        <Header />
        <Search />
        <HeroSection />
      </section>
    </>
  );
}
