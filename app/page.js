// import { headers } from "next/headers"; // для чтения user-agent на сервере
// import styles from "./page.module.css";

// // Импорт твоих компонентов
// import Main from "./comp/main/Main";
// import Section1 from "./comp/section1/Section1";
// import Section2 from "./comp/section2/Section2";
// import Section3 from "./comp/section3/Section3";
// import Section4 from "./comp/section4/Section4";
// import Section5 from "./comp/section5/Section5";
// import Section6 from "./comp/section6/Section6";
// import Section7 from "./comp/section7/Section7";
// import Footer from "./comp/footer/Footer";

// // Импорт мобильной версии (если у тебя отдельный набор компонентов для неё)
// import MobileMain from "./comp/mobile/MobileMain";
// import MobileFooter from "./comp/mobile/MobileFooter";
// // — можешь добавить сюда свои мобильные секции

// export default function Home() {
//   // Получаем заголовки запроса (работает только на сервере)
//   const ua = headers().get("user-agent") || "";
//   const isMobile = /mobile|android|iphone|ipad|ipod/i.test(ua);

//   //  Версия для компьютера
//   if (!isMobile) {
//     return (
//       <div className={styles.page}>
//         <Main />
//         <Section1 />
//         <Section2 />
//         <Section3 />
//         <Section4 />
//         <Section5 />
//         <Section6 />
//         <Section7 />
//         <Footer />
//       </div>
//     );
//   }

//   //  Версия для телефона
//   return (
//    <div className={styles.page}>
//       <MobileMain />
//       <Section1 />
//       <Section2 />
//       <Section3 />
//       <Section4 />
//       <Section5 />
//       <Section6 />
//       <Section7 />
//       <MobileFooter />
//     </div>
//   );
// }

















import Image from "next/image";
import styles from "./page.module.css";
import Main from "./comp/main/Main";
import Section1 from "./comp/section1/Section1";
import Section2 from "./comp/section2/Section2";
import Section3 from "./comp/section3/Section3";
import Section4 from "./comp/section4/Section4";
import Section5 from "./comp/section5/Section5";
import Section6 from "./comp/section6/Section6";
import Section7 from "./comp/section7/Section7";
import Footer from "./comp/footer/Footer";

export default function Home() {
  return (
    <div className={styles.page}>
     {/* <Main />
    <Section1/>
     <Section2/>
       <Section3/>  
    <Section4/>
       <Section5/>  */}
     <Section6/>
     <Section7/>
      <Footer/>
    </div>
  );
}
