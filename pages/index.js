import Link from "next/link";
import { getAllPostData } from "../lib/posts";
import styles from "../styles/Home.module.css";

export default function Home({ allPostsData }) {
  return (
    <ul className={styles.articleList}>
      {allPostsData.map(({ id, title, subtitle, date }) => (
        <li className={styles.articleLink} key={id}>
          <Link className={styles.articleLinkTitle} href={`/posts/${id}`}>
            {title}
          </Link>
          <time>{date}</time>
          <span className={styles.articleLinkSubtitle}>{subtitle}</span>
        </li>
      ))}
    </ul>
  );
}

export async function getStaticProps() {
  const allPostsData = await getAllPostData();
  return {
    props: {
      allPostsData,
    },
  };
}
