// components/layout.js
import Head from "next/head";
import Link from "next/link";
import styles from "../../styles/Home.module.css";

// import Footer from './footer'

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <meta charset="utf-8" />
        <title>ross.fyi</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="ross.fyi" />
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🗿</text></svg>"
        />
      </Head>
      <div className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.title}>
            <Link href={"/"}>ross.fyi</Link>
          </h1>
        </header>
        <main className={styles.main}>
          <article>{children}</article>
        </main>
      </div>
      <footer className={styles.footer}>
        <Link href={"/"}>Copyright © 2022 ross.fyi</Link>
      </footer>
    </>
  );
}
