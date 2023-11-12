import Header from "./components/header";
import Search from "./components/search";
import Styles from "./styles/Home.module.css";
export default function Home() {
  return (
    <>
      <section className={Styles.main}>
        <Header />
        <Search />
      </section>
    </>
  );
}
