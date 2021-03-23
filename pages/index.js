import Head from "next/head";
import Qrcode from "qrcode.react";
import { useState } from "react";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [value, setValue] = useState("");
  return (
    <div className={styles.container}>
      <Head>
        <title>Qrcode Generator</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Qrcode style={{ height: 200, width: 200 }} value={value} />
      <input
        className={styles.input}
        type="text"
        onChange={(e) => setValue(e.target.value)}
        placeholder="Paste a Url..."
      />
    </div>
  );
}
