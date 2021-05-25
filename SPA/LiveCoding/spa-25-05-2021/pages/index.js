import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home page</title>
        <meta name="description" content="welcome to home page" />
      </Head>
      <h1>Welcome to home page</h1>
      <Link href="/posts">more posts</Link>
    </div>
  );
}
