import React from "react";
import styles from "./app.module.css";
import Header from "./components/header/index";
import Aside from "./components/aside";
import Origamis from "./components/origamis/index";
import Footer from "./components/footer";

const App = () => {
  return (
    <div className={styles.app}>
      <Header />
      <div className={styles.container}>
        <Aside />
        <Origamis />
      </div>
      <Footer />
    </div>
  );
};

export default App;
