import Image from "next/image";
import styles from "./page.module.css";
import Main from "./comp/main/Main";
import Section1 from "./comp/section1/Section1";
import Section2 from "./comp/section2/Section2";
import Section3 from "./comp/section3/Section3";

export default function Home() {
  return (
    <div className={styles.page}>
     <Main />
     <Section1/>
     <Section2/>
     <Section3/>
    </div>
  );
}
