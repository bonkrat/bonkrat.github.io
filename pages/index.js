import Link from "next/link";
import { getAllPostData } from "../lib/posts";

export default function Home({ allPostsData }) {
  return (
    <ul>
      {allPostsData.map(({ id, title }) => (
        <li key={id}>
          <Link href={`/posts/${id}`}>{title}</Link>
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
