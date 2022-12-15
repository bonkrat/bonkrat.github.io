import { getAllPostIds, getPostData } from "../../lib/posts";
import styles from "../../styles/post.module.css";

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);

  return {
    props: {
      postData,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export default function Post({ postData }) {
  return (
    <>
      <h1 className={styles.title}>{postData.title}</h1>
      Updated <time className={styles.date}>{postData.date}</time>
      <p
        className={styles.content}
        dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
      />
    </>
  );
}
