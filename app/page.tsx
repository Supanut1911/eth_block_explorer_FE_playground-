import Header from "./components/header";
import Styles from "./styles/Home.module.css";
export default function Home() {
  return (
    <>
      <section className={Styles.main}>
        {" "}
        <Header />
      </section>
    </>
  );
}
