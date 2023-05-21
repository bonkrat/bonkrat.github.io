import Head from "next/head";
import Link from "next/link";
import styles from "../../styles/Home.module.css";
import Marquee from "../shared/marquee/marquee";

export default function Layout({ children }) {
  const year = new Date().getFullYear();
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
          <Marquee>
            <span className={styles.title}>
              <Link href={"/"}>ross.fyi</Link>
            </span>
          </Marquee>
        </header>
        <div className={styles.content}>
          <main className={styles.main}>
            <article>{children}</article>
          </main>
        </div>
      </div>
    </>
  );
}
